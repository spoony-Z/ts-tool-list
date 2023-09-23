/**
 * @description 禁用操作
 * @author spoony-z
 * @returns {Boolean}
 */


/**
 * @description 禁止打开控制台
 */
export function DisableConsole(): void {
setInterval(function () {
  check()
}, 1000);
var check = function () {
  function doCheck(a: number) {
    if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
      (function () { }
      ["constructor"]("debugger")())
    } else {
      (function () { }
      ["constructor"]("debugger")())
    }
    doCheck(++a)
  }
  try {
    doCheck(0)
  } catch (err) { }
};
check();
}