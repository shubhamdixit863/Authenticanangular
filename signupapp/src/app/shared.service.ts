import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private http:HttpClient ,private jwtHelper:JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    //console.log("check",this.jwtHelper.isTokenExpired(token));
    return !this.jwtHelper.isTokenExpired(token);
  }

register(username:string,password:string,name:string,email:string)
{
 return this.http.post("http://localhost:3900/signup",{username:username,password:password,name:name,email:email});

}


deleteuser(username:string)
{
  console.log(username);
  return this.http.post("http://localhost:3900/userdelete",{username:username}); 
}



login (username:string,password:string)
{
  return this.http.post("http://localhost:3900/login",{username:username,password:password});
}

logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('username');
}
getAllregistered()
{
  return this.http.post("http://localhost:3900/getAll",{});
}



}
