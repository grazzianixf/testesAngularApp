import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent implements OnInit {

  user: User

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userService.users().subscribe(
      (users) => {
        this.user = users[0]
      }
    )
  }  

}
