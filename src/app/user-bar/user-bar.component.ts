import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../types/user';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.less']
})
export class UserBarComponent implements OnInit {
  @Input('user') user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

  onLoginClick(): void {
    console.log('login clicked');
  }

}
