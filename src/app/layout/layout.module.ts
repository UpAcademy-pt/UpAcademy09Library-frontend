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
import { HeaderComponent, FooterComponent, TableComponent, AddComponent, UpdateComponent, AdminManagementComponent } from '../shared';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BsDropdownModule, PaginationModule, TooltipModule } from 'ngx-bootstrap';
import { FilterPipe } from '../shared/components/filter/filter.pipe';
import { PanelComponent } from '../shared/components/panel/panel.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { TabsModule } from 'ngx-bootstrap';
import { FilterUserPipe } from '../shared/components/filter/filter-user.pipe';
import { PersonalComponent } from './personal/personal.component';
import { SearchComponent } from '../shared/components/search/search.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BookDetailsAdminComponent } from './book-details-admin/book-details-admin.component';
import { TranslateModule } from '@ngx-translate/core';



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
    BookDetailsComponent,
    //shared components
    HeaderComponent,
    FooterComponent,
    TableComponent,
    PanelComponent,
    AdminManagementComponent,
    SearchComponent,
    //shared modal
    AddComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe,
    FilterUserPipe,
    PersonalComponent,
    SearchComponent,
    BookDetailsAdminComponent
  ],

  imports: [
    CommonModule,
    LayoutRoutingModule,
    // modal
    FormsModule,
    // search
    Ng2SearchPipeModule,
    // dropdown
    BsDropdownModule.forRoot(),
    // tabs
    TabsModule.forRoot(),
    // pagination
    NgxPaginationModule, //npm install ngx-pagination --save
    PaginationModule.forRoot(),
    // tooltip
    TooltipModule.forRoot()
    //translate
    TranslateModule,
  ]
})
export class LayoutModule { }
