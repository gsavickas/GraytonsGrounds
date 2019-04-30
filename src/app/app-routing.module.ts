import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AllComponent } from './coffeePages/all/all.component';
import { GroundsComponent } from './coffeePages/grounds/grounds.component';
import { WholeBeanComponent } from './coffeePages/whole-bean/whole-bean.component';

const routes: Routes = [ 
  {path: 'home', component: HomePageComponent},
  {path: 'coffee/main', component: AllComponent},
  {path: 'coffee/grounds', component: GroundsComponent},
  {path: 'coffee/whole-bean', component: WholeBeanComponent},
  {path: '**', redirectTo: 'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
