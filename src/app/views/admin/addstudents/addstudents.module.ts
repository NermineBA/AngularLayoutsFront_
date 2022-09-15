import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddstudentsRoutingModule } from './addstudents-routing.module';
import { AddstudentsComponent } from './addstudents.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AddstudentsComponent
  ],
  imports: [
    CommonModule,
    AddstudentsRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule
  ]
})
export class AddstudentsModule { }
