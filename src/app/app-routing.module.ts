import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';

const routes: Routes = [
  {path:'',component:UserLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'register',loadChildren:()=>import('./views/user/register/register.module').then(m=>m.RegisterModule)},
    {path:'contact',loadChildren:()=>import('./views/user/contact/contact.module').then(m=>m.ContactModule)},
    {path:'about',loadChildren:()=>import('./views/user/about/about.module').then(m=>m.AboutModule)},
    {path:'environment',loadChildren:()=>import('./views/user/environment/environment.module').then(m=>m.EnvironmentModule)},
    {path:'innovation',loadChildren:()=>import('./views/user/innovation/innovation.module').then(m=>m.InnovationModule)},
    {path:'leadership',loadChildren:()=>import('./views/user/leadership/leadership.module').then(m=>m.LeadershipModule)},
    {path:'manufacturing',loadChildren:()=>import('./views/user/manufacturing/manufacturing.module').then(m=>m.ManufacturingModule)},
    {path:'quality',loadChildren:()=>import('./views/user/quality/quality.module').then(m=>m.QualityModule)},
    {path:'supply',loadChildren:()=>import('./views/user/supply/supply.module').then(m=>m.SupplyModule)},
  ]},

  {path:'admin',component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'addstudent',loadChildren:()=>import('./views/admin/addstudents/addstudents.module').then(m=>m.AddstudentsModule)},
    {path:'allstudents',loadChildren:()=>import('./views/admin/allstudents/allstudents.module').then(m=>m.AllstudentsModule)},
     {path:'studentdetails/:id',loadChildren:()=>import('./views/admin/studentdetails/studentdetails.module').then(m=>m.StudentdetailsModule)}

  ]},
  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
