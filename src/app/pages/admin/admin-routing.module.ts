import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from "../users/users-list/users-list.component";
import {UsersAddComponent} from "../users/users-add/users-add.component";
import {UsersEditComponent} from "../users/users-edit/users-edit.component";
import {UsersDetailsComponent} from "../users/users-details/users-details.component";
import {AdminListComponent} from "./admin-list/admin-list.component";
import {AsapAction} from "rxjs/internal/scheduler/AsapAction";
import {AdminAddComponent} from "./admin-add/admin-add.component";
import {AdminEditComponent} from "./admin-edit/admin-edit.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: AdminListComponent
  },
  {
    path: 'add',
    component: AdminAddComponent
  },
  {
    path: 'edit',
    component: AdminEditComponent
  },
  {
    path: 'details/:id',
    component: AdminAddComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
