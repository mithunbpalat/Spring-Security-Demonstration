import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../guser';
import { SpringsecurityService } from '../springsecurity.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user : any = new User(0,"","","");
  a : any;
  b : any;
  constructor(private service: SpringsecurityService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    this.b = this.a;
    let resp = this.service.getUserById(this.a);
    resp.subscribe((data)=>this.user=data);
  }

}
