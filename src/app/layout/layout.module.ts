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
// tslint:disable-next-line:max-line-length
import { HeaderComponent, FooterComponent, TableComponent, AddComponent, UpdateComponent, AdminManagementComponent, AdminHistoryComponent } from '../shared';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BsDropdownModule, PaginationModule, TooltipModule, ModalModule } from 'ngx-bootstrap';
import { FilterPipe } from '../shared/components/filter/filter.pipe';
import { PanelComponent } from '../shared/components/panel/panel.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { TabsModule } from 'ngx-bootstrap';
import { FilterUserPipe } from '../shared/components/filter/filter-user.pipe';
import { PersonalComponent } from './personal/personal.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BookDetailsAdminComponent } from './book-details-admin/book-details-admin.component';
import {NgxPrintModule} from 'ngx-print';
import { TranslateModule } from '@ngx-translate/core';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BookAdminComponent } from './admin/catalog-admin/book-admin/book-admin.component';
import { DeleteComponent } from './admin/catalog-admin/delete/delete.component';
import { CatalogAdminComponent } from './admin/catalog-admin/catalog-admin.component';
import { AddBookComponent } from './admin/catalog-admin/add-book/add-book.component';
import { UpdateBookComponent } from './admin/catalog-admin/update-book/update-book.component';
import { HistoryAdminComponent } from './admin/history-admin/history-admin.component';
import { AnalyzeComponent } from './admin/history-admin/analyze/analyze.component';
import { DevolutionComponent } from './admin/history-admin/devolution/devolution.component';
import { RequestComponent } from './admin/history-admin/request/request.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { UserDetailComponent } from './admin/user-admin/user-detail/user-detail.component';
import { DisableComponent } from './admin/user-admin/disable/disable.component';
import { ReactiveComponent } from './admin/user-admin/reactive/reactive.component';
import { AdminPrivilegesComponent } from './admin/user-admin/admin-privileges/admin-privileges.component';


@NgModule({
  declarations: [
    // layout
    ContactComponent,
    AboutComponent,
    AdminComponent,
    UserComponent,
    LayoutComponent,
    HomeComponent,
    NotfoundComponent,
    BookDetailsComponent,
    // shared components
    HeaderComponent,
    FooterComponent,
    TableComponent,
    PanelComponent,
    AdminManagementComponent,
    // shared modal
    AddComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe,
    FilterUserPipe,
    PersonalComponent,
    BookDetailsAdminComponent,
    AdminHistoryComponent,
    CatalogAdminComponent,
    BookAdminComponent,
    DeleteComponent,
    AddBookComponent,
    UpdateBookComponent,
    HistoryAdminComponent,
    AnalyzeComponent,
    DevolutionComponent,
    RequestComponent,
    UserAdminComponent,
    UserDetailComponent,
    DisableComponent,
    ReactiveComponent,
    AdminPrivilegesComponent
  ],

  imports: [
    CommonModule,
    LayoutRoutingModule,
    // modal
    FormsModule,
    ModalModule.forRoot(),
    // search
    Ng2SearchPipeModule,
    // dropdown
    BsDropdownModule.forRoot(),
    // tabs
    TabsModule.forRoot(),
    // pagination
    NgxPaginationModule, // npm install ngx-pagination --save
    PaginationModule.forRoot(),
    // tooltip
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),


    ProgressbarModule.forRoot(),
    // print
    NgxPrintModule,
    TranslateModule
  ]
})
export class LayoutModule { }
