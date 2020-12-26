import {Component, OnInit} from '@angular/core';
import {NotesService} from '../notes-service/notes.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  constructor(readonly notesService: NotesService) { }

  ngOnInit() {
    this.notesService.fetchAll();
  }
}
