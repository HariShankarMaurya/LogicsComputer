import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { CourcesComponent } from './Pages/cources/cources.component';
import { EventsComponent } from './Pages/events/events.component';
import { IndexComponent } from './Pages/index/index.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { PricingComponent } from './Pages/pricing/pricing.component';
import { TrainersComponent } from './Pages/trainers/trainers.component';

const routes: Routes = [
  {path:'',component:IndexComponent} ,
   {path:'about-us',component:AboutUsComponent},
   {path:'contact',component:ContactComponent},
   {path:'cources',component:CourcesComponent},
   {path:'events',component:EventsComponent},
   {path:'pricing',component:PricingComponent},
   {path:'trainer',component:TrainersComponent},
   {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
