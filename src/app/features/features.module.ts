import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliticsComponent } from './analitics/analitics.component';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [AnaliticsComponent, PatientsComponent],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
