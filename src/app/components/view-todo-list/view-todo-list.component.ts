import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManager } from 'src/app/manager/data-service.manager';
import { TODO } from './view-todo-list.model';

@Component({
  selector: 'app-view-todo-list',
  templateUrl: './view-todo-list.component.html',
  styleUrls: ['./view-todo-list.component.scss']
})
export class ViewTodoListComponent implements OnInit {

  toDoList$: TODO[] = new Array();
  constructor(private dataManager: DataManager, private router: Router) { }

  ngOnInit(): void {
    this.fetchTodoList();
  }

  fetchTodoList() {
    this.toDoList$ = this.dataManager.formatedTODOResponse();
    
    this.getDataFromLocalStorage();
  }

  getDataFromLocalStorage() {

    let values = Object.values(localStorage);
    values.forEach(item => {
      let parsedItem = JSON.parse(item);
      if(!this.toDoList$.includes(parsedItem)) {
        this.toDoList$.push(parsedItem);
      }
    });
  }

  todoObj(element: any) {
    let todoObj: TODO = {
        id: element.id,
        title: element.title,
        completed: element.complete,
        isCustom: false
    }
    return todoObj;
  }

  createNewTodoItem() {
    this.router.navigate(['create']);
  }

  deleteItem(id:any) {
    localStorage.removeItem(id);
    var removeIndex = this.toDoList$.map(item => item.id).indexOf(id);
    this.toDoList$.splice(removeIndex, 1);
  }
}
