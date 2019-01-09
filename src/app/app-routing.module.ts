import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AnalyticsComponent  } from './modules/analytics/analytics.component';
import {PatientsComponent  } from './modules/patients/patients.component';
import {HomeComponent  } from './modules/home/home.component';
import {ChartComponent  } from './modules/analytics/chart/chart.component';

// const routes: Routes = [
//   {path: '', redirectTo: 'home', pathMatch: 'full'},
//   {
//     path: 'home',
//     component: HomeComponent,
//     children: [
//      // {path: '', redirectTo: 'analytics'},
//       {path: 'analytics',
//        component: AnalyticsComponent,
//         children:  [
//           {path: 'chart', component: ChartComponent},
//           {path: 'chart/:id', component: ChartComponent}
//         ]},
//        {path: 'patients',  component: PatientsComponent}
//     ]
//   },


//   {path: '**', component: HomeComponent}
// ];
export const ROOT_ROUTE: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent,
    children: [{
                path: 'analytics',
                component: AnalyticsComponent
              }
            ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROOT_ROUTE)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AnalyticsComponent, PatientsComponent, ChartComponent];
