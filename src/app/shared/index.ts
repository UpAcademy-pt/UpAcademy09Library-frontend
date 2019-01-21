import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent } from './components';
import { DataService, CatalogApiService, AcountApiService, HistoryApiService } from './services';



@NgModule({})
export class SharedModule {
    static forRoot() {
        return {
            NgModule: SharedModule,
            providers: [
                //component
                HeaderComponent,
                FooterComponent,
                //services
                DataService,
                CatalogApiService,
                AcountApiService,
                HistoryApiService
            ]
        };
    }
}

export * from './components';
export * from './services';
