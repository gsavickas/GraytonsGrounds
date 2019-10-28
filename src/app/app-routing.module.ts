import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AllComponent } from './coffeePages/all/all.component';
import { GroundsComponent } from './coffeePages/grounds/grounds.component';
import { WholeBeanComponent } from './coffeePages/whole-bean/whole-bean.component';
import { RegisterComponent } from './registerPage/register/register.component';
import { LoginComponent } from './loginPage/login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [ 
  {path: 'home', component: HomePageComponent},
  {path: 'coffee/main', component: AllComponent},
  {path: 'coffee/grounds', component: GroundsComponent},
  {path: 'coffee/whole-bean', component: WholeBeanComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'about', component: AboutUsComponent},
  {path: '**', redirectTo: 'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
