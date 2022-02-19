import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultHeaderComponent } from './_shared/default-header/default-header.component';
import { DefaultFooterComponent } from './_shared/default-footer/default-footer.component';
import { IndexComponent } from './Pages/index/index.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { CourcesComponent } from './Pages/cources/cources.component';
import { TrainersComponent } from './Pages/trainers/trainers.component';
import { EventsComponent } from './Pages/events/events.component';
import { PricingComponent } from './Pages/pricing/pricing.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { WhyUsComponent } from './Pages/why-us/why-us.component';
import { VissionMissionComponent } from './Pages/vission-mission/vission-mission.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    IndexComponent,
    AboutUsComponent,
    CourcesComponent,
    TrainersComponent,
    EventsComponent,
    PricingComponent,
    ContactComponent,
    NotfoundComponent,
    WhyUsComponent,
    VissionMissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
