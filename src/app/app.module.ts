import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ModalModule, TabsModule } from 'ngx-bootstrap';
<<<<<<< HEAD
import { FilterUserPipe } from './shared/components/filter/filter-user.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
=======


>>>>>>> 49a70407ee71dcf52ff1ff57e814414e58970552

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    ModalModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
=======
    ModalModule.forRoot()

>>>>>>> 49a70407ee71dcf52ff1ff57e814414e58970552
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
