import { LogoutResolver } from './resolvers/logout-resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path : '' ,  component: WelcomeComponent},
  { path: 'list', component: ProductsListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: ProductsAddComponent, canActivate: [AuthGuard]  },
  { path: 'detail/:id',
         component: ProductsDetailComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  {path: 'logout', component: WelcomeComponent, resolve: [LogoutResolver]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
