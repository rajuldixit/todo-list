import { Component, OnInit } from '@angular/core';
import { DataManager } from 'src/app/manager/data-service.manager';
import { TODO } from '../view-todo-list/view-todo-list.model';

@Component({
  selector: 'app-create-todo-item',
  templateUrl: './create-todo-item.component.html',
  styleUrls: ['./create-todo-item.component.scss']
})
export class CreateTodoItemComponent implements OnInit {

  title: string = '';
  isCompleted: boolean = false;
  constructor(private dataManager: DataManager) { }

  ngOnInit(): void {
  }
  updateTitle(title: Event) {
    this.title = (<HTMLInputElement> title.target).value;
  }
  updateIsCompletedValue(e: Event) {
    this.isCompleted = !this.isCompleted;
  }
  onCreate() {
    let todoObj: TODO = {
      id: this.dataManager.getTotalLengthOfTODOlist() + 1,
      title: this.title,
      completed: this.isCompleted,
      isCustom: true 
    }

    this.dataManager.createNewItem(todoObj);
  }
}
