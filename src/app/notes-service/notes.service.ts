import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {INote} from './types';
import {BehaviorSubject, Observable, of, pipe, Subject} from 'rxjs';
import {catchError, switchMap, switchMapTo, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public inProgress$ = new BehaviorSubject<boolean>(false);
  public error$ = new BehaviorSubject<string>(null);
  public create$ = new Subject<INote>();
  public delete$ = new Subject<number>();
  public edit$ = new Subject<INote>();
  private fetch$ = new BehaviorSubject(null);

  public allNotes$ = this.fetch$.pipe(
    switchMapTo(
      this.http.get<INote[]>('http://localhost:3200/notes')
    ),
    tap(() => this.inProgress$.next(false)),
  );

  constructor(private http: HttpClient) {
    this.create$.pipe(
      this.defaultPipe(note => this.http.post(
        'http://localhost:3200/note',
        note,
        {headers: {'Content-Type': 'application/json'}}
      )),
    ).subscribe();

    this.delete$.pipe(this.defaultPipe((id) => this.http.delete(
      `http://localhost:3200/note/${id}`,
      {headers: {'Content-Type': 'application/json'}, responseType: 'text'}
    ))).subscribe();

    this.edit$.pipe(
      this.defaultPipe(note => this.http.put(
        `http://localhost:3200/note/${note._id}`,
        note,
        {headers: {'Content-Type': 'application/json'}}
      )),
    ).subscribe();
  }

  private defaultPipe(cb: (...args) => Observable<any>) {
    return pipe(
      tap(() => this.inProgress$.next(true)),
      switchMap(cb),
      catchError(err => {
        this.error$.next(err.message);
        return of(42);
      }),
      tap(() => this.fetch$.next(null))
    );
  }
}
