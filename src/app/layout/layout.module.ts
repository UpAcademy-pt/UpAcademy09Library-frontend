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
import { HeaderComponent, FooterComponent, TableComponent, AddComponent, UpdateComponent, AdminManagementComponent, AdminHistoryComponent } from '../shared';
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
import {NgxPaginationModule} from 'ngx-pagination';
import { BookDetailsAdminComponent } from './book-details-admin/book-details-admin.component';
import { UserDetailAdminComponent } from './user-detail-admin/user-detail-admin.component';
import {NgxPrintModule} from 'ngx-print';
<<<<<<< HEAD
import { TranslateModule } from '@ngx-translate/core';

=======
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
>>>>>>> 49a70407ee71dcf52ff1ff57e814414e58970552


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
    //shared modal
    AddComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe,
    FilterUserPipe,
    PersonalComponent,
    BookDetailsAdminComponent,
    UserDetailAdminComponent,
    AdminHistoryComponent
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
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    
    // print
    NgxPrintModule,
    TranslateModule
  ]
})
export class LayoutModule { }
