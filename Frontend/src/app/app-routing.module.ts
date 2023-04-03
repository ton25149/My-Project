import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelsListComponent } from './components/travels-list/travels-list.component';
import { TravelDetailComponent } from './components/travel-detail/travel-detail.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AbouthomeComponent } from './about/abouthome/abouthome.component';
import { TickethomeComponent } from './ticket/tickethome/tickethome.component';
import { PropertyhomeComponent } from './property/propertyhome/propertyhome.component';
import { InfohomeComponent } from './information/infohome/infohome.component';

const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'home' },
 { path: 'travels-list', component: TravelsListComponent },
 { path: 'edit-travel/:id', component: TravelDetailComponent },
 { path: 'header', component: HeaderComponent },
 { path: 'home', component: HomeComponent },
 { path: 'abouthome', component: AbouthomeComponent },
 { path: 'tickethome', component: TickethomeComponent },
 { path: 'propertyhome', component: PropertyhomeComponent },
 { path: 'infohome', component: InfohomeComponent },

];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }