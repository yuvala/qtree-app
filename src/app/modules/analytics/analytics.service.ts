import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }



  getChartType() {
    return [
      {
        name: 'patient-acrual',
        id: 321,
        chartType: 'line-chart'
      },
      {
        name: 'patient-gender',
        id: 654,
        chartType: 'line-chart'
      },
      {
        name: 'patient-disease',
        id: 789,
        chartType: 'line-chart'
      }
    ];
  }
}
