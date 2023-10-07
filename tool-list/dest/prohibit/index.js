"use strict";
/**
 * @description 禁用操作
 * @author spoony-z
 * @returns {Boolean}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableConsole = exports.DisableConsole = void 0;
/**
 * @description 禁止打开控制台
 */
function DisableConsole() {
    setInterval(function () {
        check();
    }, 1000);
    var check = function () {
        function doCheck(a) {
            if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
                (function () { }["constructor"]("debugger")());
            }
            else {
                (function () { }["constructor"]("debugger")());
            }
            doCheck(++a);
        }
        try {
            doCheck(0);
        }
        catch (err) { }
    };
    check();
}
exports.DisableConsole = DisableConsole;
/**
 * @abstract 取消禁用控制台
 */
// 首先，声明一个变量来保存定时器的ID
let consoleDisableInterval;
// 然后，创建一个函数来停止禁用控制台
function enableConsole() {
    clearInterval(consoleDisableInterval); // 停止定时器
    console.log('Console is now enabled.'); // 输出消息，表示控制台已启用
}
exports.enableConsole = enableConsole;
// 调用 enableConsole 函数来取消禁用控制台
enableConsole();
