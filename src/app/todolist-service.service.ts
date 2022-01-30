import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodolistServiceService {
 

  
  private todoList :TodoItem[] = [
    {
      title: 'Todo Task One',
      date: '4-2-2022'
    },
    {
      title: 'Todo Task Two',
      date: '5-2-2022'
    },
    {
      title: 'Todo Task Three',
      date: '6-2-2022'
    }, 
    {
      title: 'Todo Task Four',
      date: '7-2-2022'
    } ,
    {
      title: 'Todo Task Five',
      date: '8-2-2022'
    } 

  ];
  constructor() { }
  getTodoList(): TodoItem[] {
    return this.todoList;
  }
  
}
