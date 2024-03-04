import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from "../users/users-list/users-list.component";
import {UsersAddComponent} from "../users/users-add/users-add.component";
import {UsersEditComponent} from "../users/users-edit/users-edit.component";
import {UsersDetailsComponent} from "../users/users-details/users-details.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductAddComponent} from "./product-add/product-add.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ProductListComponent
  },
  {
    path: 'add',
    component: ProductAddComponent
  },
  {
    path: 'edit',
    component: ProductEditComponent
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
