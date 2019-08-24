import { SharedService } from './../shared.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import decode from 'jwt-decode';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private service:SharedService,private route: ActivatedRoute, private router: Router,private flashMessage: FlashMessagesService) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
if(this.form.value.username=="" || this.form.value.password=="")
{
  this.flashMessage.show('Username or Password cant be blank', { cssClass: 'alert-danger', timeout: 4000 });
}

else{
  this.service.login(this.form.value.username,this.form.value.password).subscribe(data=>{
   
    console.log(data);
   if(data["token"])
   {  
     // checking if the token is present
     // saving the token inside  localstorage
     localStorage.setItem('currentUser', JSON.stringify(data["user"]));
     localStorage.setItem('token', JSON.stringify(data["token"]));
     localStorage.setItem('role', JSON.stringify(data["role"]));

     //const tokenPayload = decode(data.token);
     //console.log("payload"+JSON.stringify(tokenPayload));
     
       console.log("executed");
       //console.log("executed",data.role);

       if(data["role"]=="admin")
       {
        this.router.navigate(['/home']);
       }
      else if(data["role"]=="user")
      {
        this.router.navigate(['/user']);
      }

       //console.log("executed",data.role);
     

    
   }

   else{

    this.flashMessage.show('Wrong Username Or Password', { cssClass: 'alert-danger', timeout: 4000 });

   }


  })
}

   
   }

  ngOnInit() {
  }

}
