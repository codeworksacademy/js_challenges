export const CONSOLE_DISPLAYS = {
  pass: '\x1b[42m ✅ \x1b[40m\x1b[32m',
  fail: '\x1b[41m X \x1b[40m\x1b[31m got:',
  input: '\x1b[40m 🧪 \x1b[40m\x1b[33m',
  reset: '\x1b[0m',
  custom: '\n\x1b[46m [👾] --- CUSTOM INPUT --- \x1b[40m\x1b[33m'
}

export function logPass() {
  console.log(
    CONSOLE_DISPLAYS.pass,
    ...arguments,
    CONSOLE_DISPLAYS.reset)
}
export function logFail() {
  console.log(
    CONSOLE_DISPLAYS.fail,
    ...arguments,
    CONSOLE_DISPLAYS.reset)
}
export function logInput() {
  console.log(
    CONSOLE_DISPLAYS.input,
    ...arguments,
    CONSOLE_DISPLAYS.reset)
}
export function logCustom() {
  console.log(
    CONSOLE_DISPLAYS.custom,
    ...arguments,
    CONSOLE_DISPLAYS.reset)
}

export function logTestStats(stats) {

  console.log(
    '\n-------------------------------\n',
    ' \x1b[40m 🧪 \x1b[40m\x1b[33m', ':', stats.totalTests,
    ' \x1b[42m ✅ \x1b[40m\x1b[32m', ':', stats.passedTests,
    ' \x1b[41m X \x1b[40m\x1b[31m', ':', stats.failedTests,
    CONSOLE_DISPLAYS.reset)
}