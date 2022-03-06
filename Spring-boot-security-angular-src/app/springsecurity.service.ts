import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './guser';

@Injectable({
  providedIn: 'root'
})
export class SpringsecurityService {

  constructor(private http: HttpClient) { }



  
  public postUser(user: User){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postuser",user,{headers,responseType:'text' as 'json'});
  }
  public updateUser(user: User){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateuser",user,{headers,responseType:'text' as 'json'});
  }
  public getUsers(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallusers",{headers});
  }
  public getUserByUsername(a:string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getuserbyusername?username="+a,{headers});
  }
  public getUserById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getuserbyid?uid="+a,{headers});
  }
  public deleteUser(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteuserbyid?uid="+a,{headers});
  }
  public getUseryByUname(user: User){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/getuserbyuname",user,{headers,responseType:'text' as 'json'});
  }
  public updateUserProfile(user: User){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateuserprofile",user,{headers,responseType:'text' as 'json'});
  }










  public login(username:string, password:string){
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/",{headers,responseType:'text' as 'json'});
  }
}
