import { Observable, map, of } from 'rxjs';
import { UserInterface } from './../interfaces/UserInterface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-examples';
  users$: Observable<string[]> = of(['']);

  //region rxjs map
  normalizeUsers(users$: Observable<UserInterface[]>): Observable<string[]> {
    return users$.pipe(map((users) => users.map((user) => user.name)));
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.users$ = this.normalizeUsers(
      of([
        { id: '1', name: 'Satyam', age: 24 },
        { id: '2', name: 'Dexter', age: 22 },
      ])
    );

    console.log(this.users$);
  }

  // cosole.log(this.users$);

  // this.users$.subscribe()
}
