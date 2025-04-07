import asyncio
import json

class Table:
    def __init__(self, id, *cols):
        self.id = id
        self.cols = cols
        self.rows = []

    def add_row(self, *cols):
        self.rows.append(cols)

    def display(self):
        print(f"\nTable: {self.id}")
        # Print header
        print(" | ".join(self.cols))
        print("-" * (3 * len(self.cols) + len(self.cols) - 1))
        # Print rows
        for row in self.rows:
            print(" | ".join(str(col) for col in row))


class TestSuite:
    def __init__(self):
        self.tables = {}
        self.delay = 0
        self.stats = {
            'failedTests': 0,
            'passedTests': 0,
            'totalTests': 0
        }

    def new_table(self, id, *cols):
        table = Table(id, *cols)
        self.tables[id] = table
        return table

    def add_table_row(self, id, *cols):
        table = self.tables[id]
        table.add_row(*cols)

    def draw_stats(self):
        table = self.new_table('test-stats', 'Total Tests', 'Passed', 'Failed', 'Challenge Complete')
        challenge_complete = '✅' if self.stats['totalTests'] == self.stats['passedTests'] else '❌'
        table.add_row(self.stats['totalTests'], self.stats['passedTests'], self.stats['failedTests'], challenge_complete)
        table.display()

    def format_data(self, data):
        if isinstance(data, Table):
            return f"<b class='data-function'>{data.id}</b>"
        elif data in ('✅', '❌'):
            return data
        elif isinstance(data, Exception):
            return f"<span class='data-error'>{data.__class__.__name__}{{ message: '{str(data)}' }}</span>"
        elif data is None:
            return "<span class='data-null'>null</span>"
        elif isinstance(data, list):
            return f"<span class='data-array'>[{', '.join(self.format_data(e) for e in data)}]</span>"
        elif isinstance(data, dict):
            return f"<span class='data-object'>{json.dumps(data)}</span>"
        elif isinstance(data, str):
            return f"<span class='data-string'>{json.dumps(data)}</span>"
        elif isinstance(data, (int, float)):
            return f"<span class='data-number'>{data}</span>"
        elif isinstance(data, bool):
            return f"<span class='data-boolean'>{str(data).lower()}</span>"
        return str(data)

    async def draw_result(self, result):
        await asyncio.sleep(self.delay * 0.1)
        if result['challenge'] not in self.tables:
            self.new_table(result['challenge'], *result.keys())
        self.add_table_row(result['challenge'], *result.values())
        self.delay += 1

    async def do_test(self, fn, expected, *args):
        try:
            test_result = await fn(*args)
            self.stats['totalTests'] += 1

            if test_result == expected:
                self.stats['passedTests'] += 1
            else:
                self.stats['failedTests'] += 1

            result = {
                'challenge': fn.__name__,
                **{k: v for k, v in zip(self.extract_func_args(fn), args)},
                'returned': test_result,
                'expected': expected,
                'passed': '✅' if test_result == expected else '❌'
            }
            await self.draw_result(result)
            return result
        except Exception as error:
            print(f"ERROR in: {fn.__name__} with arguments: ", json.dumps(args))
            raise error

    async def test_yield(self):
        for fn, expected, args in self.test_suite():
            await self.do_test(fn, expected, *args)

    async def run_tests(self):
        self.stats = {'failedTests': 0, 'passedTests': 0, 'totalTests': 0}

        await self.test_yield()

        if self.stats['passedTests'] == self.stats['totalTests']:
            await self.celebrate()

        self.draw_stats()

    async def celebrate(self):
        print("🎉 All tests passed!")

    async def start(self):
        await self.run_tests()

    def extract_func_args(self, func):
        from inspect import signature
        return list(signature(func).parameters.keys())

    def test_suite(self):
        # Define your function list here for yielding
        # Example:
        # yield self.sample_function, expected_value, (arg1, arg2)
        pass

    # Example function to test
    async def sample_function(self, a, b):
        return a + b


async def main():
    suite = TestSuite()
    await suite.start()

asyncio.run(main())