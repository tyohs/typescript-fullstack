import { Injectable } from '@nestjs/common';
import { Task } from './tasks';

@Injectable()
export class TaskService {
  private readonly taskExamples: Task[] = [
    {
      id: 'task-1',
      title: 'TypeScriptを復習する',
      status: 'todo',
    },
    {
      id: 'task-2',
      title: 'NestJSの公式ドキュメントを読む',
      status: 'doing',
    },
  ];

  getAllTasks(): Task[] {
    return this.taskExamples;
  }
}
