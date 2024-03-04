import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
},
{
  path: 'users',
    loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule),
},
{
  path: 'product',
    loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
},
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'weblog',
    loadChildren: () => import('./pages/weblog/weblog.module').then((m) => m.WeblogModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
{
  path: '**',
    redirectTo: 'error/404',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
