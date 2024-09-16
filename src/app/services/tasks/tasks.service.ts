import { Injectable } from '@angular/core';
import { CreateTask } from '@app/models/createtask.model';
import { Task } from '@models/task.model';
import { HttpService } from '@services/http/http.service';
 
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [];

  constructor(private httpService: HttpService) {
    this.getTasks();
  }

  getTasks() {
    this.httpService.get('/tasks').subscribe((newTasks) => {
      this.tasks = [...newTasks].reverse();
    });
  }

  addTask(task: CreateTask) {
    return this.httpService.post('/tasks', task);
  }
}
