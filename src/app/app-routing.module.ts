import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { TypeEvenementFormComponent } from './type-evenement-form/type-evenement-form.component';
import { TypeEvenementListComponent } from './type-evenement-list/type-evenement-list.component';
import { TypeEvenementDetailsComponent } from './type-evenement-details/type-evenement-details.component';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { EvenementFormComponent } from './evenement-form/evenement-form.component';
import { EvenementDetailsComponent } from './evenement-details/evenement-details.component';
import { MembreListComponent } from './membre-list/membre-list.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilmembreComponent } from './profilmembre/profilmembre.component';
import { MembreupdateComponent } from './membreupdate/membreupdate.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'login1', component: Login1Component},
  {path: 'admin', component: AdminListComponent},
  {path: 'admin/create', component: AdminFormComponent},
  {path: 'admin/update', component: AdminDetailsComponent},
  //{path: 'typeEvenement', component: TypeEvenementListComponent},
  //{path: 'typeEvenement/create', component: TypeEvenementFormComponent},
  //{path: 'typeEvenement/show', component: TypeEvenementDetailsComponent},
  //{path: 'evenement', component: EvenementListComponent},
  //{path: 'evenement/create', component: EvenementFormComponent},
  //{path: 'evenement/show', component: EvenementDetailsComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'membre', component: MembreListComponent},
  {path: 'membre/update', component: MembreupdateComponent},
  {path: 'membre/profilmembre', component: ProfilmembreComponent},
  
  //{path: 'membre/create', component: MembreFormComponent},
  //{path: 'membre/update', component: MembreDetailsComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
