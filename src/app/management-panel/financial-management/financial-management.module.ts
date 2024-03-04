import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialManagementRoutingModule } from './financial-management-routing.module';
import { FinancialManagementComponent } from './financial-management.component';
import { FinManListComponent } from './fin-man-list/fin-man-list.component';
import { FinManDetailsComponent } from './fin-man-details/fin-man-details.component';
import { FinManEditComponent } from './fin-man-edit/fin-man-edit.component';
import { FinManAddComponent } from './fin-man-add/fin-man-add.component';


@NgModule({
  declarations: [
    FinancialManagementComponent,
    FinManListComponent,
    FinManDetailsComponent,
    FinManEditComponent,
    FinManAddComponent
  ],
  imports: [
    CommonModule,
    FinancialManagementRoutingModule
  ]
})
export class FinancialManagementModule { }
