import { AngularMaterialModule } from './../angularmaterial.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from  '@angular/common/http';
import {  JwtModule } from '@auth0/angular-jwt';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({config: {
      throwNoTokenError: false
    }}),
    FlashMessagesModule.forRoot(),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
