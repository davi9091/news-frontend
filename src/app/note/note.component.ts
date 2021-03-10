import {Component, Input, OnInit} from '@angular/core';
import {INote} from '../notes-service/types';
import {NotesService} from '../notes-service/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less']
})
export class NoteComponent {
  @Input() note: INote;

  constructor(private notesService: NotesService) { }
}
