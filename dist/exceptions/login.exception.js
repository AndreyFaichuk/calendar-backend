"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginException = void 0;
const common_1 = require("@nestjs/common");
class LoginException extends common_1.HttpException {
    constructor() {
        super('User not found!', 406);
    }
}
exports.LoginException = LoginException;
//# sourceMappingURL=login.exception.js.map