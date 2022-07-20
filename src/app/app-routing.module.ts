import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { TypeEvenementFormComponent } from './type-evenement-form/type-evenement-form.component';
import { TypeEvenementListComponent } from './type-evenement-list/type-evenement-list.component';
import { TypeEvenementDetailsComponent } from './type-evenement-details/type-evenement-details.component';

const routes: Routes = [

  {path:'admin', component: AdminListComponent},
  {path: 'admin/show', component: AdminDetailsComponent},
  {path: 'admin/create', component: AdminFormComponent},
  {path: 'typeEvenement', component: TypeEvenementListComponent},
  {path: 'typeEvenement/create', component: TypeEvenementFormComponent},
  {path: 'typeEvenement/show', component: TypeEvenementDetailsComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
