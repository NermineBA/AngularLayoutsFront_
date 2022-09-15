import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplyRoutingModule } from './supply-routing.module';
import { SupplyComponent } from './supply/supply.component';


@NgModule({
  declarations: [
    SupplyComponent
  ],
  imports: [
    CommonModule,
    SupplyRoutingModule
  ]
})
export class SupplyModule { }
