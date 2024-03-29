"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const registered_exception_1 = require("../exceptions/registered.exception");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getUser(userName) {
        const username = userName.toLowerCase();
        const user = await this.userModel.findOne({ username });
        return user;
    }
    async insertUser(userName, password, email) {
        const username = userName.toLowerCase();
        const potentialUser = await this.getUser(username);
        if (!potentialUser) {
            const newUser = new this.userModel({
                username,
                password,
                email,
            });
            await newUser.save();
            return newUser;
        }
        throw new registered_exception_1.RegisteredException();
    }
    async editUser(userId, data) {
        const { username, email, age, avatar, gender, _id } = await this.userModel.findByIdAndUpdate(userId, data, { new: true })
            .exec();
        return {
            username,
            email,
            age,
            avatar,
            gender,
            userId: _id,
        };
    }
    async getUserById(userId) {
        const { username, email, age, avatar, gender, _id } = await this.userModel.findById(userId);
        return {
            username,
            email,
            age,
            avatar,
            gender,
            userId: _id,
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("user")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map