import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

  private users: User[] = [
    {id: 1, name: 'Fulano'},
    {id: 2, name: 'Cicrano'},
    {id: 3, name: 'Beltrano'}
  ]

  constructor() { }

  all() : User[] {
    return this.users;
  }

  byId(id: number): User {
    return this.users.find(user => user.id == id)
  }
}
