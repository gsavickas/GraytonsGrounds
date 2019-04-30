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
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //AlertModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
