import {Component, OnInit} from '@angular/core';
import {NotesService} from '../notes-service/notes.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.less']
})
export class NoteAddComponent implements OnInit {
  public noteForm: FormGroup;

  constructor(private notesService: NotesService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.noteForm = this.formBuilder.group({
      title: '',
      body: '',
    });
  }

  public isNoteValid(): boolean {
    return this.noteForm.value && !!this.noteForm.value.title && !!this.noteForm.value.body;
  }

  public createNote(): void {
    if (this.isNoteValid()) {
      this.notesService.create$.next(this.noteForm.value);
      this.noteForm.reset();
    }
  }
}
