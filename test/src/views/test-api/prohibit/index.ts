/**
 * @description 禁用操作
 * @author spoony-z
 * @returns {Boolean}
 */

const originalLog = console.log;
const originalError = console.error;
const originalWarn = console.warn;



// 其他 console 方法也可以依照这种方式禁用



/**
 * @description 禁止打开控制台
 */
export function DisableConsole(closDisabled: boolean): void {
  if(closDisabled) {
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
}

/**
 * @abstract 取消禁用控制台
 */

export function enableConsole() {
  DisableConsole(true)

// 其他 console 方法也可以依照这种方式启用

}