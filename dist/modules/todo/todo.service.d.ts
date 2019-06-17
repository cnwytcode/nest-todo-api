import { Repository } from 'typeorm';
import { Todo } from '../../entity/todo.entity';
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(params: any): Promise<Todo[]>;
    create(params: any): Promise<string>;
    update(params: any): Promise<string>;
    findOneById(id: number): Promise<Todo>;
}
