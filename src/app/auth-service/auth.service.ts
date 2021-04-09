import { Injectable } from '@angular/core';
import {IUser} from '../types/user';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, shareReplay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new BehaviorSubject<IUser>(null);

  public user$ = this.subject.asObservable();

  public isLoggedIn$: Observable<boolean>;

  private loginUrl = 'http://localhost:3200/user/login';
  private registerUrl = 'http://localhost:3200/user/register';

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
  }

  public registerUser(user: IUser) {
    return this.http.post<IUser>(
      this.registerUrl,
      user,
    ).pipe(
      tap(registeredUser => this.subject.next(registeredUser)),
      shareReplay(),
    );
  }

  public login(username: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(
      this.loginUrl,
      {username, password})
      .pipe(
        tap(user => this.subject.next(user)),
        shareReplay(),
      );
  }

  public logout() {
    this.subject.next(null);
  }
}
