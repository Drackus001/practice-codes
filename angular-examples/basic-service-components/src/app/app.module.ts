import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoDisplayComponent } from './components/todo-display/todo-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
