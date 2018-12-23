import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent, SearchComponent } from './components';


@NgModule({})
export class SharedModule{
    static forRoot(){
        return {
            NgModule: SharedModule,
            providers: [
                HeaderComponent,
                FooterComponent,
                SearchComponent
            ]
        }
    }
}

export * from './components';