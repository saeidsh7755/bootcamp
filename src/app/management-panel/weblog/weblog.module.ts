import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeblogRoutingModule } from './weblog-routing.module';
import { WeblogComponent } from './weblog.component';
import { WeblogListComponent } from './weblog-list/weblog-list.component';
import { WeblogDetailsComponent } from './weblog-details/weblog-details.component';
import { WeblogEditComponent } from './weblog-edit/weblog-edit.component';
import { WeblogAddComponent } from './weblog-add/weblog-add.component';


@NgModule({
  declarations: [
    WeblogComponent,
    WeblogListComponent,
    WeblogDetailsComponent,
    WeblogEditComponent,
    WeblogAddComponent
  ],
  imports: [
    CommonModule,
    WeblogRoutingModule
  ]
})
export class WeblogModule { }
