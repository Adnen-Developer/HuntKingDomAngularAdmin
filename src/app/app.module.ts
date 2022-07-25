import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { TypeEvenementFormComponent } from './type-evenement-form/type-evenement-form.component';
import { TypeEvenementListComponent } from './type-evenement-list/type-evenement-list.component';
import { TypeEvenementDetailsComponent } from './type-evenement-details/type-evenement-details.component';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { EvenementDetailsComponent } from './evenement-details/evenement-details.component';
import { EvenementFormComponent } from './evenement-form/evenement-form.component';
import { MembreListComponent } from './membre-list/membre-list.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { ProfilmembreComponent } from './profilmembre/profilmembre.component';
import { MembreupdateComponent } from './membreupdate/membreupdate.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SideBarComponent,
    AdminFormComponent,
    AdminListComponent,
    AdminDetailsComponent,
    TypeEvenementFormComponent,
    TypeEvenementListComponent,
    TypeEvenementDetailsComponent,
    EvenementListComponent,
    EvenementDetailsComponent,
    EvenementFormComponent,
    MembreListComponent,
    LoginComponent,
    Login1Component,
    ProfilComponent,
    ProfilmembreComponent,
    MembreupdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


    RouterModule,
    
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent, FooterComponent]
})
export class AppModule { }
