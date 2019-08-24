import { Router } from '@angular/router';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service :SharedService,private router: Router) { }


dataarray:any[];

logout()
{
this.service.logout();
this.router.navigate(['/']);
}


getAllRegsitered()
{
  console.log("called");
  this.service.getAllregistered().subscribe(data=>{
    this.dataarray=data["user"];
  })
}
  

deleteuser(username:string)
{
  console.log("deletee");
  // calling some method from our shared service
  this.service.deleteuser(username).subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/home"]));
  });
}

  ngOnInit() {
    this.getAllRegsitered();
  }

}
