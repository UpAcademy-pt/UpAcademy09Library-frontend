import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent, FooterComponent, TableComponent, AddComponent, UpdateComponent } from '../shared';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    //layout
    ContactComponent,
    AboutComponent,
    AdminComponent,
    UserComponent,
    LayoutComponent,
    HomeComponent,
    NotfoundComponent,
    //shared components
    HeaderComponent,
    FooterComponent,
    TableComponent,
    //shared modal
    AddComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent
  ],

  imports: [
    CommonModule,
    LayoutRoutingModule,
    // modal
    FormsModule,
    // search
    Ng2SearchPipeModule
  ]
})
export class LayoutModule { }
