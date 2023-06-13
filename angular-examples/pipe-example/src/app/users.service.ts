import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly users = [
    { id: 1, name: 'Satyam Agarwal' },
    { id: 2, name: 'Rick Grimes' },
  ];

  constructor() {}
}
