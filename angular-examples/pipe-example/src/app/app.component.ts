import { TheoryService } from './theory.service';
import { Component, inject } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pipe-example';
  users: any;
  theoryService = inject(TheoryService);
  usersService = inject(UsersService);

  getTheory(userId: number): any {
    console.log('LOG: ' + userId);
    return this.theoryService.getTheory(userId);
  }
}
