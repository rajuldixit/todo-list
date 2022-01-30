import { Injectable } from '@angular/core';
import * as env from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TODO } from '../components/view-todo-list/view-todo-list.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL: string = env.environment.api.BASEURL;
  constructor(private httpClient : HttpClient) { }

  fetch() {
    let url = this.baseURL;
    return this.httpClient.get(url);
  }

  create(todoObj: TODO) {
    let url = this.baseURL;
    return this.httpClient.post(url,todoObj);
  }

  delete() {}
}
