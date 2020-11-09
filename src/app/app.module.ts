import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UsernameComponent } from './login/username/username.component';
import { PasswordComponent } from './login/password/password.component';
import { SubmitComponent } from './login/submit/submit.component';
import { PetComponent } from './view/pet/pet.component';
import { ColorComponent } from './view/color/color.component';
import { FoodComponent } from './view/food/food.component';
import { ZodiacComponent } from './view/zodiac/zodiac.component';
import { PalindromeComponent } from './view/palindrome/palindrome.component';
import { UpdateComponent } from './view/update/update.component';
import { RegisterUsernameComponent } from './register/register-username/register-username.component';
import { RegisterPasswordComponent } from './register/register-password/register-password.component';
import { RegisterSubmitComponent } from './register/register-submit/register-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ViewComponent,
    UsernameComponent,
    PasswordComponent,
    SubmitComponent,
    PetComponent,
    ColorComponent,
    FoodComponent,
    ZodiacComponent,
    PalindromeComponent,
    UpdateComponent,
    RegisterUsernameComponent,
    RegisterPasswordComponent,
    RegisterSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
