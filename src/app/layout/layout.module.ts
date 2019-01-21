import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule, ADMIN_COMPONENTS } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
// tslint:disable-next-line:max-line-length
import { HeaderComponent, FooterComponent } from '../shared';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BsDropdownModule, PaginationModule, TooltipModule, ModalModule } from 'ngx-bootstrap';
import { PanelComponent } from '../shared/components/panel/panel.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { TabsModule } from 'ngx-bootstrap';
import { PersonalComponent } from './personal/personal.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxPrintModule} from 'ngx-print';
import { TranslateModule } from '@ngx-translate/core';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { RatingModule } from 'ngx-bootstrap/rating';

@NgModule({
  declarations: [
    ...ADMIN_COMPONENTS,
    // layout
    ContactComponent,
    AboutComponent,
    UserComponent,
    LayoutComponent,
    HomeComponent,
    NotfoundComponent,
    BookDetailsComponent,
    // shared components
    HeaderComponent,
    FooterComponent,
    PanelComponent,
    // shared modal
    LoginComponent,
    RegisterComponent,
    PersonalComponent
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
    RatingModule.forRoot(),
    // print
    NgxPrintModule,
    TranslateModule
  ]
})
export class LayoutModule { }


