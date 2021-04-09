import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../types/user';
import {AuthService} from '../auth-service/auth.service';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.less']
})
export class UserBarComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLoginClick(): void {
    console.log('login clicked');
  }

}
