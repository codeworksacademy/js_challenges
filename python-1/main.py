
import asyncio
import json
import inspect
from pyscript import document, window
from testSuite import test_suite

class Table:
    def __init__(self, id, *cols):
        self.id = id
        self.cols = cols
        self.rows = []

        main_element = document.getElementById('output')
        self.element = document.createElement('table')
        self.element.setAttribute('id', id)
        
        thead = document.createElement('thead')
        thead.innerHTML = ''.join(f'<th>{col}</th>' for col in cols)
        self.element.appendChild(thead)
        
        self.tbody = document.createElement('tbody')
        self.element.appendChild(self.tbody)

        main_element.appendChild(self.element)

    def add_row(self, *cols):
        row_class = 'passed' if cols[-1] == '✅' else 'failed'
        row_html = '<tr class="{0}">{1}</tr>'.format(
            row_class,
            ''.join(f'<td>{self.format_data(c)}</td>' for c in cols)
        )
        self.tbody.innerHTML += row_html

    def format_data(self, data):
        if isinstance(data, str):
            return f"'{data}'"
        if isinstance(data, bool):
            return 'true' if data else 'false'
        if data is None:
            return 'null'
        return str(data)
    

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

    def format_data(self, data):
        return str(data)

    async def draw_result(self, result):
        await asyncio.sleep(self.delay)
        if result['challenge'] not in self.tables:
            self.new_table(result['challenge'], *result.keys())
        self.add_table_row(result['challenge'], *result.values())
        self.delay += .025

    async def do_test(self, fn, expected, *args):
        try:
            if inspect.iscoroutinefunction(fn):
                test_result = await fn(*args)
            else:
                test_result = fn(*args)
        
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
        for fn, expected, args in test_suite():
            await self.do_test(fn, expected, args)

    async def run_tests(self):
        self.stats = {'failedTests': 0, 'passedTests': 0, 'totalTests': 0}
        await self.test_yield()

        if self.stats['passedTests'] == self.stats['totalTests']:
            await self.celebrate()

        self.draw_stats()

    async def celebrate(self):
        window.celebrate()

    async def start(self):
        await self.run_tests()

    def extract_func_args(self, func):
        from inspect import signature
        return list(signature(func).parameters.keys())


    async def sample_function(self, a, b):
        return a + b

async def main():
    suite = TestSuite()
    await suite.start()

asyncio.create_task(main())
