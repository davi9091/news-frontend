import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {INote} from './types';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public allNotes$ = new BehaviorSubject<INote[]>([]);

  constructor(private http: HttpClient) {
  }

  public fetchAll() {
    return this.http.get<INote[]>('http://localhost:3200/notes').subscribe(res => {
      this.allNotes$.next(res);
    });
  }

  public createNote(note: INote) {
    return this.http.post(
      'http://localhost:3200/note',
      note,
      {headers: {'Content-Type': 'application/json'}}
    ).subscribe(() => {
      this.fetchAll();
    });
  }

  public deleteNote(id: string) {
    return this.http.delete(`http://localhost:3200/note/${id}`).subscribe(() => {
      this.fetchAll();
    });
  }

  public editNote(note: INote) {
    return this.http.put(`https://localhost:3200/note/${note._id}`, note).subscribe(() => {
      this.fetchAll();
    });
  }
}
