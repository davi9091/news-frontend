import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {HttpClientModule} from '@angular/common/http';
import {NoteAddComponent} from './note-add/note-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NoteAddComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
