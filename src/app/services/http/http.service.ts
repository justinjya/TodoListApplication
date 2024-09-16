import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTask } from '@app/models/createtask.model';
import { Task } from '@models/task.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'https://66e2df28494df9a478e369d8.mockapi.io';

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get<Task[]>(`${this.baseUrl}${url}`);
  }

  post(url: string, body: CreateTask) {
    return this.http.post<Task>(`${this.baseUrl}${url}`, body);
  }
}
