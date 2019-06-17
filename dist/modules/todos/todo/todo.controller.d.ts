import { Todo } from '../../../entity/todo.entity';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(params: any): Promise<Todo[]>;
    findOne(params: any, body: any): Promise<void | Todo>;
    create(params: any, body: any): Promise<string>;
    update(id: any, UpdateCatDto: any): string;
    remove(id: any): string;
}
