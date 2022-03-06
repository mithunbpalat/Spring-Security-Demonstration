import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:"",redirectTo:"adminlogin",pathMatch:"full"},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"adminuser",component:AdminuserComponent},
  {path:"userlogin",component:UserloginComponent},
  {path:"userprofile/:id",component:UserprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
