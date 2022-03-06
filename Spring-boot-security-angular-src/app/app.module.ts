import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpringsecurityService } from './springsecurity.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminuserComponent,
    UserloginComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SpringsecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
