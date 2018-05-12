import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
