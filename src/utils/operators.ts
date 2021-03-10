import {tap} from 'rxjs/operators';

export function debug() {
  return tap((...args) => console.log(args));
}
