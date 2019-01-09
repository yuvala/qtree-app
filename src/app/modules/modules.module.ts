import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PatientsComponent } from './patients/patients.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AnalyticsComponent, PatientsComponent, HomeComponent, MenuComponent],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
