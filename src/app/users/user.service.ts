import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { User } from './user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  users() : Observable<User[]> {
    //está sendo feito o uso do json-server que carrega um mock de api para o arquivo /assets/db.json
    return this.http.get('http://localhost:3000/users')
      .map(response => response.json())
  }

  userById(id: string) : Observable<User> {
    return this.http.get(`http://localhost:3000/users/${id}`)
      .map(response => response.json())
  }

  roles(id: string) : Observable<any> {
    return this.http.get(`http://localhost:3000/users/${id}/roles`)
      .map(response => response.json())
  }
}
