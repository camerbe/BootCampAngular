import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemosRoutingModule } from './demos-routing.module';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { DemosComponent } from './demos.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Demo01Component,
    Demo02Component,
    Demo03Component,
    DemosComponent
  ],
  imports: [
    SharedModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }
