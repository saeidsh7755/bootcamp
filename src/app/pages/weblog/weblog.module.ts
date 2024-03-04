import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeblogRoutingModule } from './weblog-routing.module';
import { WeblogComponent } from './weblog.component';
import { WeblogListComponent } from './weblog-list/weblog-list.component';
import { WeblogAddComponent } from './weblog-add/weblog-add.component';
import { WeblogEditComponent } from './weblog-edit/weblog-edit.component';
import { WeblogDetailsComponent } from './weblog-details/weblog-details.component';


@NgModule({
  declarations: [
    WeblogComponent,
    WeblogListComponent,
    WeblogAddComponent,
    WeblogEditComponent,
    WeblogDetailsComponent,
  ],
  imports: [
    CommonModule,
    WeblogRoutingModule
  ]
})
export class WeblogModule { }
