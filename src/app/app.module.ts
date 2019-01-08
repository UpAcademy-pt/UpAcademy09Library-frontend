import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, TabsModule } from 'ngx-bootstrap';
import { FilterUserPipe } from './shared/components/filter/filter-user.pipe';
import { SearchComponent } from './shared/components/search/search/search.component';





@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
