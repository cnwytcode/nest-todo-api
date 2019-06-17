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
const common_1 = require("@nestjs/common");
const api_exception_1 = require("../../../common/exceptions/api.exception");
const api_code_enum_1 = require("../../../common/enums/api-code.enum");
const todo_service_1 = require("./todo.service");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    findAll(params) {
        console.log("-->TodoController: findAll");
        return this.todoService.findAll(params);
    }
    findOne(params, body) {
        let id = parseInt(params.id);
        console.warn(id);
        console.warn(isNaN(id));
        if (isNaN(id) || typeof id !== 'number' || id <= 0) {
            throw new api_exception_1.ApiException('用户ID错误', api_code_enum_1.ApiCode.INVALID_USER_ID, common_1.HttpStatus.OK);
        }
        console.log("-->TodoController: findOne");
        console.log(params);
        console.log(body);
        console.log(body.Act);
        return this.todoService.findOneById(params.id).then(x => {
            console.error('---> findOne: ');
            console.error(x);
            return x;
        }).catch(err => {
            console.error(err);
        });
    }
    create(params, body) {
        console.log("-->TodoController:  create");
        console.log(params);
        console.log(body.title);
        if (body.title == '' || typeof body.title == 'undefined') {
            throw new api_exception_1.ApiException('参数错误:title', api_code_enum_1.ApiCode.INVALID_USER_ID, common_1.HttpStatus.OK);
        }
        let res = this.todoService.create(body);
        return res;
    }
    update(id, UpdateCatDto) {
        return `-->TodoController: This action updates a #${id} cat`;
    }
    remove(id) {
        return `-->TodoController: This action removes a #${id} cat`;
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "remove", null);
TodoController = __decorate([
    common_1.Controller('todos'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map