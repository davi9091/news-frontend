import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {LoginComponent} from './login/login.component';
import {UserRegisterComponent} from './user-register/user-register.component';


const routes: Routes = [
  {path: '', component: TodoListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: UserRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
