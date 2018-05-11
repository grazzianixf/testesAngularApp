import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
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
