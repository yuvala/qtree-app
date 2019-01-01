import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [AnalyticsComponent, PatientsComponent],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
