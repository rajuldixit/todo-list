import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoItemComponent } from './components/create-todo-item/create-todo-item.component';
import { ViewTodoListComponent } from './components/view-todo-list/view-todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: ViewTodoListComponent
  },
  {
    path: 'create',
    component: CreateTodoItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
