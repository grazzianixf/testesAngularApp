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
    //como exemplo fazemos o subscribe para um Observable que contem os usuarios obtidos no serviço, qdo eles sao obtidos eh atribuido ao atributo da classe
    this.userService.users().subscribe(
      (users) => {
        this.user = users[0]
      }
    )
  }  

  click(formUser) {
    console.log(formUser.value)
  }
}
