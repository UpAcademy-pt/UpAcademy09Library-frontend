
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
import { BookAdminComponent } from './admin/catalog-admin/book-admin/book-admin.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { AdminGuard } from '../shared/guards/admin.guard';
import { UserDetailComponent } from './admin/user-admin/user-detail/user-detail.component';
import { CatalogAdminComponent } from './admin/catalog-admin/catalog-admin.component';
import { AddBookComponent } from './admin/catalog-admin/add-book/add-book.component';
import { UpdateBookComponent } from './admin/catalog-admin/update-book/update-book.component';
import { DeleteComponent } from './admin/catalog-admin/delete/delete.component';
import { HistoryAdminComponent } from './admin/history-admin/history-admin.component';
import { AnalyzeComponent } from './admin/history-admin/analyze/analyze.component';
import { DevolutionComponent } from './admin/history-admin/devolution/devolution.component';
import { RequestComponent } from './admin/history-admin/request/request.component';
import { DisableComponent } from './admin/user-admin/disable/disable.component';
import { ReactiveComponent } from './admin/user-admin/reactive/reactive.component';
import { AdminPrivilegesComponent } from './admin/user-admin/admin-privileges/admin-privileges.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', component: HomeComponent },
            { path: 'user', component: AuthenticatedComponent, canActivate: [AuthGuard] },
            { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'log in', component: LoginComponent },
            { path: 'personal/:id', component: PersonalComponent, canActivate: [AuthGuard] },
            { path: 'register', component: RegisterComponent },
            { path: 'notfound', component: NotfoundComponent },
            { path: 'bookdetails/:isbn', component: BookDetailsComponent, canActivate: [AuthGuard] },
            { path: 'bookadmin/:id', component: BookAdminComponent, canActivate: [AuthGuard, AdminGuard] },
            { path: 'useradmin/:id', component: UserDetailComponent, canActivate: [AuthGuard, AdminGuard] },
            { path: '**', redirectTo: 'notfound' }

        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

/* Export To Layout Module */
export const ADMIN_COMPONENTS = [
    AdminComponent,
    CatalogAdminComponent,
    BookAdminComponent,
    AddBookComponent,
    UpdateBookComponent,
    DeleteComponent,
    HistoryAdminComponent,
    AnalyzeComponent,
    DevolutionComponent,
    RequestComponent,
    UserAdminComponent,
    UserDetailComponent,
    DisableComponent,
    ReactiveComponent,
    AdminPrivilegesComponent
];
