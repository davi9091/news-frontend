import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  @Input('user') user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
