import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from "../users/users-list/users-list.component";
import {UsersAddComponent} from "../users/users-add/users-add.component";
import {UsersEditComponent} from "../users/users-edit/users-edit.component";
import {UsersDetailsComponent} from "../users/users-details/users-details.component";
import {WeblogListComponent} from "./weblog-list/weblog-list.component";
import {WeblogAddComponent} from "./weblog-add/weblog-add.component";
import {WeblogEditComponent} from "./weblog-edit/weblog-edit.component";
import {WeblogDetailsComponent} from "./weblog-details/weblog-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: WeblogListComponent
  },
  {
    path: 'add',
    component: WeblogAddComponent
  },
  {
    path: 'edit',
    component: WeblogEditComponent
  },
  {
    path: 'details/:id',
    component: WeblogDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeblogRoutingModule { }
