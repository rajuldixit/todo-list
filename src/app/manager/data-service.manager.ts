import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TODO } from "../components/view-todo-list/view-todo-list.model";
import { DataService } from "../services/data-service.service";

@Injectable({
    providedIn: 'root'
})
export class DataManager {
    
    toDoList$: TODO[] = new Array();
    constructor(private dataService: DataService) {}

    formatedTODOResponse() {
        this.dataService.fetch().subscribe(resp => {
            Object.values(resp).forEach(element => {
              this.toDoList$.push(this.todoObj(element));
            });
        });
        return this.toDoList$;
    }


    todoObj(element: any) {
        let todoObj: TODO = {
            id: element.id,
            title: element.title,
            completed: element.completed,
            isCustom: false
        }
        return todoObj;
    }

    createNewItem(item: TODO) {
        this.dataService.create(item).subscribe(resp => {
            if(resp) {
                localStorage.setItem(item.id.toString(), JSON.stringify(item));
            }
        })
    }

    getTotalLengthOfTODOlist() {
        return this.toDoList$.length;
    }
}