import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../user.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit {

  roles: Observable<any>

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    //como se trata de um parametro do componente pai, é necessário informar o parent antes do snapshot
    let userId = this.route.parent.snapshot.params['id']

    //nesse exemplo é atribuido direto o observable ao atributo da classe, assim o template tem que fazer um tratamento com Pipe (| async) para que saiba que eh um observable
    this.roles = this.userService.roles(userId)
  }

}
