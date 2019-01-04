import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent, TableComponent, AddComponent, UpdateComponent, AdminManagementComponent } from './components';
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
                TableComponent,
                AddComponent,
                UpdateComponent,
                AdminManagementComponent,
                //services
                DataService,
                CatalogApiService
            ]
        }
    }
}

export * from './components';
export * from './services';