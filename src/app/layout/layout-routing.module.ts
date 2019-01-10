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
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuthGuard } from '../shared/guards';
import { PersonalComponent } from './personal/personal.component';
import { BookDetailsAdminComponent } from './book-details-admin/book-details-admin.component';
import { UserDetailAdminComponent } from './user-detail-admin/user-detail-admin.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', component: HomeComponent },
            { path: 'user', component: UserComponent,  canActivate: [AuthGuard] },
            { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'log in', component: LoginComponent},
            { path: 'personal/:id', component: PersonalComponent,  canActivate: [AuthGuard]},
            { path: 'register', component: RegisterComponent},
            { path: 'notfound', component: NotfoundComponent },
            { path: 'bookdetails/:id', component: BookDetailsComponent },
            { path: 'bookdetailsadmin/:id', component: BookDetailsAdminComponent },
            { path: 'userdetailadmin/:id', component: UserDetailAdminComponent },
            { path: '**', redirectTo: 'notfound' }

        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

