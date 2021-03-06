import { AnnounceCardComponent } from './component/announce-card/announce-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProposalComponent } from './component/proposal/proposal.component';
import { AnnounceComponent } from './pages/announce/announce.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/session/login/login.component';
import { SearchPlateComponent } from './pages/seller/search-plate/search-plate.component';
import { RegisterComponent } from './pages/session/register/register.component';
import { LoadingComponent } from './component/loading/loading.component';
import { VistoriaComponent } from './component/vistoria/vistoria.component';
import { ModelsComponent } from './component/models/models.component';
import { SellerHomeComponent } from './pages/seller/seller-home/seller-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'announce', component: AnnounceComponent },
  { path: 'proposal', component: ProposalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'seller/sell', component: SearchPlateComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'vistoria', component: VistoriaComponent },
  { path: 'models', component: ModelsComponent },
  { path: 'announce-card', component: AnnounceCardComponent },
  { path: 'seller', component: SellerHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
