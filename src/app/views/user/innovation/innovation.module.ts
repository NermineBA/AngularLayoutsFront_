import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnovationRoutingModule } from './innovation-routing.module';
import { InnovationComponent } from './innovation/innovation.component';


@NgModule({
  declarations: [
    InnovationComponent
  ],
  imports: [
    CommonModule,
    InnovationRoutingModule
  ]
})
export class InnovationModule { }
