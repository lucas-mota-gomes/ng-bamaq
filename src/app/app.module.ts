import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { FiltrosComponent } from './pages/filtros/filtros.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { AnnounceCardComponent } from './component/announce-card/announce-card.component';
import { AnnounceComponent } from './pages/announce/announce.component';
import { BannerComponent } from './component/banner/banner.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchPlateComponent } from './pages/seller/search-plate/search-plate.component';
import { ProposalComponent } from './component/proposal/proposal.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './pages/session/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    FiltrosComponent,
    CarouselComponent,
    AnnounceCardComponent,
    AnnounceComponent,
    BannerComponent,
    LoginComponent,
    SearchPlateComponent,
    ProposalComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
