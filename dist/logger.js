"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor(DebugMode, Product) {
        this.DebugMode = false;
        this.DebugMode = DebugMode;
        this.Product = Product;
    }
    Debug(Message) {
        this.DebugMode
            ? console.log(`[${this.Product} (DEBUG)]: ${Message}`)
            : null;
    }
    Info(Message) {
        console.log(`[${this.Product} (INFO)]: ${Message}`);
    }
    Warn(Message) {
        console.log(`[${this.Product} (WARN)]: ${Message}`);
    }
    Error(Message) {
        console.log(`[${this.Product} (ERROR)]: ${Message}`);
    }
    Fatal(Message) {
        console.log(`[${this.Product} (FATAL)]: ${Message}`);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map