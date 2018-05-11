import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { User } from './user';

@Injectable()
export class UserService {

 /*  private users: User[] = [
    {id: 1, name: 'Fulano'},
    {id: 2, name: 'Cicrano'},
    {id: 3, name: 'Beltrano'}
  ] */

  constructor(private http: Http) { }

  /* all() : User[] {
    return this.users;
  } */

  users() : Observable<User[]> {
    return this.http.get('http://localhost:3000/users')
      .map(response => response.json())
  }

  /* byId(id: number): User {
    return this.users.find(user => user.id == id)
  } */

  userById(id: string) : Observable<User> {
    return this.http.get(`http://localhost:3000/users/${id}`)
      .map(response => response.json())
  }
}
