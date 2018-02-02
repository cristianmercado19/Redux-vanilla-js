"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_app_pkg_1 = require("task-app-pkg");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.run = function () {
        var elementById = document.getElementById('content');
        if (elementById) {
            elementById.innerHTML = task_app_pkg_1.getPlural("test");
        }
        console.log('content', elementById);
    };
    return Main;
}());
exports.Main = Main;
//# sourceMappingURL=main.js.map