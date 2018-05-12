import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: ['.active-link {color: inherit; text-decoration: inherit;}'] //classe para routerLinkActive dizer que o link é um texto normal
})
export class UserComponent implements OnInit {

  user: User

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    //busca o parametro "id" da rota pela qual chegou no atual componente
    let userId = this.route.snapshot.params['id']

    //faz o subscribe do Observable de retorno para que qdo ele for atualizado seja atribuido o usuario ao this.user
    this.userService.userById(userId).subscribe(
      //nesse caso como a arraowFunction tem apenas uma linha n eh necessario "(" e ")" para o parametro e nem {} para o corpo da function
      user => this.user = user
    )
  }

}
