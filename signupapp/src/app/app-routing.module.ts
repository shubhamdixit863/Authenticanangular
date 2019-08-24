import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
 {
   "path":"",
    "component":LoginComponent   
 }
,
{
  "path":"signup",
   "component":SignupComponent   
},
{
  "path":"home",
   "component":HomeComponent,
   canActivate:[AuthGuard],
   data:{"expectedRole":"admin"}
},

{
  "path":"user",
   "component":UserComponent,
   canActivate:[AuthGuard],
   data:{"expectedRole":"user"}
},

{
  "path":"**",
   redirectTo:""
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
