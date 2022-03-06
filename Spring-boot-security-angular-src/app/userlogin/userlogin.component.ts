import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../guser';
import { SpringsecurityService } from '../springsecurity.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  message : any;
  msg : any;
  user : any = new User(0,"","","");
  test : any = new User(0,"","","");
  constructor(private service: SpringsecurityService , private router:Router) { }

  ngOnInit(): void {
  }

  public searchById(tu:string,tp:string){
    let resp = this.service.getUserByUsername(tu);
    resp.subscribe((data)=>this.user=data);

    let respo = this.service.getUseryByUname(this.test);
    respo.subscribe((data)=>this.message=data);

    this.msg = "Check the username or password";
    if(tu && tp){
    if(this.message == "authenticated"){
      this.router.navigate(["/userprofile/",this.user.uid])
    }
  }
  }

}
