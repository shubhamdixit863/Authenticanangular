import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private service:SharedService,private flashMessage: FlashMessagesService) { }


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
  });


  register()
  {

if(this.form.value.username=="" ||this.form.value.password=="" || this.form.value.name=="" || this.form.value.email=="")
{
  this.flashMessage.show("Fields Empty ,Please Fill All the Places", { cssClass: 'alert-success', timeout: 2000 });
}
else{
  this.service.register(this.form.value.username,this.form.value.password,this.form.value.name,this.form.value.email).subscribe(data=>{
    console.log(data);
    this.form.reset();
    
    this.flashMessage.show(data["message"], { cssClass: 'alert-success', timeout: 4000 });

 })
}

    
    //console.log(this.form.value);
  }

  ngOnInit() {
  }

}
