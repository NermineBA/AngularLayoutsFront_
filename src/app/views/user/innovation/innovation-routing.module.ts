import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnovationComponent } from './innovation/innovation.component';

const routes: Routes = [
  {path:'',component:InnovationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnovationRoutingModule { }
