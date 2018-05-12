import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserComponent } from './users/user/user.component';
import { UserService } from './users/user.service';
import { HomeComponent } from './home/home.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { RolesComponent } from './users/user/roles/roles.component';
import { ToDosComponent } from './users/user/to-dos/to-dos.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user/:id', component: UserComponent, //passagem de parametros
    children: [
      //essa primeira entrada eh para qdo ja queremos mostrar um component filho (ex: roles) ao se chamar o componente pai (ex: user)
      {path: '', redirectTo: 'roles', pathMatch: 'full'},
      {path: 'roles', component: RolesComponent},
      {path: 'todos', component: ToDosComponent}
    ]},
  {path: 'templateForms', component: TemplateFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    UserComponent,
    HomeComponent,
    TemplateFormComponent,
    RolesComponent,
    ToDosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  //usando o provider do appModule o serviço fica disponivel para toda a aplicação
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

