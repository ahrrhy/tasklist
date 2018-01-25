import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskComponent } from './todo-list/task/task.component';
import { FavoriteBtnComponent } from './todo-list/task/favorite-btn/favorite-btn.component';
import { DeclineBtnComponent } from './todo-list/task/decline-btn/decline-btn.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FavoriteBtnComponent,
    DeclineBtnComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
