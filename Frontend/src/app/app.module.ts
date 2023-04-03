import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelDetailComponent } from './components/travel-detail/travel-detail.component';
import { TravelsListComponent } from './components/travels-list/travels-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AbouthomeComponent } from './about/abouthome/abouthome.component';
import { PropertyhomeComponent } from './property/propertyhome/propertyhome.component';
import { TickethomeComponent } from './ticket/tickethome/tickethome.component';
import { InfohomeComponent } from './information/infohome/infohome.component';


@NgModule({
 declarations: [
 AppComponent,
 TravelDetailComponent,
 TravelsListComponent,
 HeaderComponent,
 FooterComponent,
 HomeComponent,
 AbouthomeComponent,
 PropertyhomeComponent,
 TickethomeComponent,
 InfohomeComponent,
 
 ],
 imports: [
 BrowserModule,
 AppRoutingModule,
 BrowserAnimationsModule,
 FormsModule,
 HttpClientModule,
 ReactiveFormsModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
