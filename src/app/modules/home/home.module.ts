import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {MenuComponent} from './../menu/menu.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuComponent
  ]
})
export class HomeModule {}
