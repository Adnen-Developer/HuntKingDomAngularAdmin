import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { TypeEvenementFormComponent } from './type-evenement-form/type-evenement-form.component';
import { TypeEvenementListComponent } from './type-evenement-list/type-evenement-list.component';
import { TypeEvenementDetailsComponent } from './type-evenement-details/type-evenement-details.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent, FooterComponent]
})
export class AppModule { }
