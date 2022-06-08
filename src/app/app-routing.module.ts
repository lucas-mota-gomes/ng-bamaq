import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProposalComponent } from './component/proposal/proposal.component';
import { AnnounceComponent } from './pages/announce/announce.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/session/login/login.component';
import { SearchPlateComponent } from './pages/seller/search-plate/search-plate.component';
import { RegisterComponent } from './pages/session/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'announce', component: AnnounceComponent },
  { path: 'proposal', component: ProposalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'seller/sell', component: SearchPlateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
