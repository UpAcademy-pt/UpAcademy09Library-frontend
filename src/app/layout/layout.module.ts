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
import { HeaderComponent, FooterComponent, SearchComponent, TableComponent, AddComponent } from '../shared';
 //modal
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 //Table
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
//forms
import { FormsModule} from '@angular/forms';


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
    //shared
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    TableComponent,
    AddComponent
  ],

  imports: [
    CommonModule,
    LayoutRoutingModule,
    //forms
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,

    
  ]
})
export class LayoutModule { }
