import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementAdminsRoutingModule } from './management-admins-routing.module';
import { ManagementAdminsComponent } from './management-admins.component';
import { ManAdmListComponent } from './man-adm-list/man-adm-list.component';
import { ManAdmDetailsComponent } from './man-adm-details/man-adm-details.component';
import { ManAdmEditComponent } from './man-adm-edit/man-adm-edit.component';
import { ManAdmAddComponent } from './man-adm-add/man-adm-add.component';


@NgModule({
  declarations: [
    ManagementAdminsComponent,
    ManAdmListComponent,
    ManAdmDetailsComponent,
    ManAdmEditComponent,
    ManAdmAddComponent
  ],
  imports: [
    CommonModule,
    ManagementAdminsRoutingModule
  ]
})
export class ManagementAdminsModule { }
