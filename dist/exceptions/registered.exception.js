"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisteredException = void 0;
const common_1 = require("@nestjs/common");
class RegisteredException extends common_1.HttpException {
    constructor() {
        super('User already registered!', 406);
    }
}
exports.RegisteredException = RegisteredException;
//# sourceMappingURL=registered.exception.js.map