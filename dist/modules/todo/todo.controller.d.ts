import { TodoService } from './todo.service';
import { Todo } from '../../entity/todo.entity';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(params: any): Promise<Todo[]>;
    findOne(params: any, body: any): Promise<void | Todo>;
    create(params: any, body: any): Promise<string>;
    update(params: any, body: any): Promise<string>;
    remove(id: any): string;
}
