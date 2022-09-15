import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingRoutingModule } from './manufacturing-routing.module';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';


@NgModule({
  declarations: [
    ManufacturingComponent
  ],
  imports: [
    CommonModule,
    ManufacturingRoutingModule
  ]
})
export class ManufacturingModule { }
