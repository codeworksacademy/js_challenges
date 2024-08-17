export const CONSOLE_DISPLAYS = {
  pass: 'background: green; color: white;',
  fail: 'background: red; color: white;',
  input: 'background: black; color: yellow;',
  reset: '',
  custom: 'background: cyan; color: black;'
};

export function logPass() {
  console.log(
    '%c ✅',
    CONSOLE_DISPLAYS.pass,
    ...arguments,
    CONSOLE_DISPLAYS.reset
  );
}

export function logFail() {
  console.log(
    '%c X got:',
    CONSOLE_DISPLAYS.fail,
    ...arguments,
    CONSOLE_DISPLAYS.reset
  );
}

export function logInput() {
  console.log(
    '%c 🧪',
    CONSOLE_DISPLAYS.input,
    ...arguments,
    CONSOLE_DISPLAYS.reset
  );
}

export function logCustom() {
  console.log(
    '%c [👾] --- CUSTOM INPUT ---',
    CONSOLE_DISPLAYS.custom,
    ...arguments,
    CONSOLE_DISPLAYS.reset
  );
}

export function logTestStats(stats) {
  console.log(
    '\n-------------------------------\n' +
    '%c 🧪 %c: %c' + stats.totalTests + ' ' +
    '%c ✅ %c: %c' + stats.passedTests + ' ' +
    '%c X %c: %c' + stats.failedTests,
    'background: black; color: yellow;', '', 'color: yellow;',
    'background: green; color: white;', '', 'color: green;',
    'background: red; color: white;', '', 'color: red;'
  );
}