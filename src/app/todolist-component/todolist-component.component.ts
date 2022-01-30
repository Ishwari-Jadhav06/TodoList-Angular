import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodolistServiceService } from '../todolist-service.service';

@Component({
  selector: 'app-todolist-component',
  templateUrl: './todolist-component.component.html',
  styleUrls: ['./todolist-component.component.css']
})
export class TodolistComponentComponent implements OnInit {
 @Input() public parentData: any;
 @Output() public remove = new EventEmitter(); 
  todoList!: TodoItem[];
  constructor(private todoListService: TodolistServiceService) { }
  
  
  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }
  deleteTodo(id:number){  
    this.remove.emit(id + " : Index Item Deleted");
    this.todoList = this.todoList.filter((v, i) => i !== id);  
}
}