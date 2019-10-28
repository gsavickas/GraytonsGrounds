import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GroundsComponent } from './coffeePages/grounds/grounds.component';
import { WholeBeanComponent } from './coffeePages/whole-bean/whole-bean.component';
import { FooterComponent } from './footer/footer.component';
import { AllComponent } from './coffeePages/all/all.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './registerPage/register/register.component';
import { LoginComponent } from './loginPage/login/login.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    GroundsComponent,
    WholeBeanComponent,
    FooterComponent,
    AllComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    //AlertModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
