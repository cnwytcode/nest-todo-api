import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOperator } from 'typeorm';
import { Todo } from '../../entity/todo.entity';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api-error-code.enum';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) { }

  async findAll(params: any): Promise<Todo[]> {
    console.log(params);
    // let page : number = params.page ? params.page : 1;
    // let pageSize : number = params.size ? params.size : 10;
    // let where = {
    //   skip: page * pageSize,
    //   take: pageSize
    // }
    // console.log(where);
    // return await 
    return await this.todoRepository.find();
  }

  async create(params: any): Promise<string> {
    let todo = new Todo();
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
        return err
      });
  }

  async update(id: number, params: any): Promise<string> {
    let todoModel = new Todo();
    todoModel.id = params.id;
    const todo = await this.todoRepository.findOne(todoModel);
    console.log('---------------->:');
    console.log(todo);
    console.log(params.isStar);
    if (typeof todo == 'undefined') {
      throw new ApiException('数据不存在', ApiErrorCode.NOT_FOUND)
    }
    if(params.isStar) {
      console.log('------isStaryes---------->:');
    } else {
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
        return err
      });
  }
  async findOneById(id: number): Promise<Todo> {
    return await this.todoRepository.findOneOrFail({
      id: id
    }).then(res => {
      console.log('---->findOneById res:');
      console.log(res);

      return res
    }).catch(err => {
      console.log('---->findOneById error:');
      console.log(err);
      return err
    });
  }
}