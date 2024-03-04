import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {UsersDetailsComponent} from "./users-details/users-details.component";
import {UsersEditComponent} from "./users-edit/users-edit.component";
import {UsersAddComponent} from "./users-add/users-add.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: UsersListComponent
      },
      {
        path: 'add',
        component: UsersAddComponent
      },
      {
        path: 'edit',
        component: UsersEditComponent
      },
      {
        path: 'details/:id',
        component: UsersDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
