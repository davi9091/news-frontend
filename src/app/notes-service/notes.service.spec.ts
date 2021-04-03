import {TestBed} from '@angular/core/testing';

import {NotesService} from './notes.service';

describe('NotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      const j = i + 1;
      console.log(j);
    }
  });
});
