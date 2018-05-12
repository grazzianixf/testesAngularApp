import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

  //o decorator @Input indica que esse eh um parametro que esse componente recebe de quem o utilizar
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
