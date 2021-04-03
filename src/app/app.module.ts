import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {HttpClientModule} from '@angular/common/http';
import {NoteAddComponent} from './note-add/note-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoteComponent } from './note/note.component';
import { LoginComponent } from './login/login.component';
import { UserBarComponent } from './user-bar/user-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NoteAddComponent,
    NoteComponent,
    LoginComponent,
    UserBarComponent
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
