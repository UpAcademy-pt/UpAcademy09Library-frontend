import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', component: HomeComponent },
            { path: 'user', component: UserComponent },
            { path: 'admin', component: AdminComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'login', component: LoginComponent},
            { path: 'register', component: RegisterComponent},
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: 'notfound' }

        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { };