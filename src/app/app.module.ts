import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponentComponent } from './todolist-component/todolist-component.component';
import { TodolistServiceService } from './todolist-service.service';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodolistServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  

 }

