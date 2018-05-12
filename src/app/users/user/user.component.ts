import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: ['.active-link {   color: inherit; text-decoration: inherit;}']
})
export class UserComponent implements OnInit {

  user: User

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    let userId = this.route.snapshot.params['id']

    this.userService.userById(userId).subscribe(
      user => this.user = user
    )
  }

}
