import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
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
import { BsDropdownModule, PaginationModule, TooltipModule, ModalModule, CollapseModule, AccordionModule } from 'ngx-bootstrap';

import { BookDetailsComponent } from './book-details/book-details.component';
import { TabsModule } from 'ngx-bootstrap';
import { PersonalComponent } from './personal/personal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPrintModule } from 'ngx-print';
import { TranslateModule } from '@ngx-translate/core';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SearchComponent } from './search/search.component';
import { CardsComponent } from './authenticated/cards/cards.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';

@NgModule({
  declarations: [
    ...ADMIN_COMPONENTS,
    // layout
    AuthenticatedComponent,
    ContactComponent,
    AboutComponent,
    LayoutComponent,
    HomeComponent,
    NotfoundComponent,


    // shared components
    HeaderComponent,
    FooterComponent,
    // shared modal
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    //
    // UserComponent,
    BookDetailsComponent,
    // PanelComponent,
    PersonalComponent,
    CardsComponent
  ],

  imports: [
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
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
