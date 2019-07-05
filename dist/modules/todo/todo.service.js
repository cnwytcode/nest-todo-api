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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const todo_entity_1 = require("../../entity/todo.entity");
const api_exception_1 = require("src/common/exceptions/api.exception");
const api_error_code_enum_1 = require("src/common/enums/api-error-code.enum");
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    findAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(params);
            return yield this.todoRepository.find();
        });
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let todo = new todo_entity_1.Todo();
            todo.title = params.title;
            todo.content = params.content ? params.content : '';
            todo.createTime = Math.round(new Date().getTime() / 1000);
            todo.userId = params.userId ? params.userId : '10010';
            console.log(todo);
            return this.todoRepository.save(todo)
                .then(res => {
                console.log('---->res:');
                console.log(res);
                return res;
            })
                .catch(err => {
                console.log('---->error:');
                console.log(err);
                return err;
            });
        });
    }
    update(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let todoModel = new todo_entity_1.Todo();
            todoModel.id = params.id;
            const todo = yield this.todoRepository.findOne(todoModel);
            console.log('---------------->:');
            console.log(todo);
            console.log(params.isStar);
            if (typeof todo == 'undefined') {
                throw new api_exception_1.ApiException('数据不存在', api_error_code_enum_1.ApiErrorCode.NOT_FOUND);
            }
            if (params.isStar) {
                console.log('------isStaryes---------->:');
            }
            else {
                console.log('--------isStar-no------->:');
            }
            return;
            if (params.title) {
                todo.title = params.title;
            }
            if (params.content) {
                todo.content = params.content ? params.content : '';
            }
            if (params.isStar) {
                todo.isStar = params.isStar;
            }
            if (params.isFinish) {
                todo.isFinish = params.isFinish;
            }
            todo.updateTime = Math.round(new Date().getTime() / 1000);
            console.log(todo);
            return this.todoRepository.save(todo).then(res => {
                console.log('---->res:');
                console.log(res);
                return res;
            }).catch(err => {
                console.log('---->error:');
                console.log(err);
                return err;
            });
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.todoRepository.findOneOrFail({
                id: id
            }).then(res => {
                console.log('---->findOneById res:');
                console.log(res);
                return res;
            }).catch(err => {
                console.log('---->findOneById error:');
                console.log(err);
                return err;
            });
        });
    }
};
TodoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(todo_entity_1.Todo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map