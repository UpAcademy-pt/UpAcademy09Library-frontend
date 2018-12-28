import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent, SearchComponent, TableComponent, AddComponent, UpdateComponent } from './components';
import { DataService, CatalogApiService } from './services';


@NgModule({})
export class SharedModule{
    static forRoot(){
        return {
            NgModule: SharedModule,
            providers: [
                //component
                HeaderComponent,
                FooterComponent,
                SearchComponent,
                TableComponent,
                AddComponent,
                UpdateComponent,
                //services
                DataService,
                CatalogApiService
            ]
        }
    }
}

export * from './components';
export * from './services';