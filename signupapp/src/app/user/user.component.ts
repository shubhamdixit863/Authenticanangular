import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:SharedService ,private router:Router) { }

  ngOnInit() {
  }

  logout()
  {
  this.service.logout();
  this.router.navigate(['/']);
  }


}
