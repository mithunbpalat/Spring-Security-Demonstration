import { Component, OnInit } from '@angular/core';
import { Search } from '../gsearch';
import { User } from '../guser';
import { SpringsecurityService } from '../springsecurity.service';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {

  user : any = new User(0,"","","");
  users : any;
  search :any =new Search(0);
  constructor(private service: SpringsecurityService) { }

  ngOnInit(): void {
    let resp = this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

  
  public postUserNow(){
    let resp = this.service.postUser(this.user);
    resp.subscribe((data)=>this.users=data);
  }

  public updateUserNow(){
    let resp = this.service.updateUser(this.user);
    resp.subscribe((data)=>this.users=data);
  }

  public delUser(a: number){
    let resp = this.service.deleteUser(a);
    resp.subscribe((data)=>this.users=data);
  }

  public searchById(a:number){
    let resp = this.service.getUserById(a);
    resp.subscribe((data)=>this.user=data);
  }
}
