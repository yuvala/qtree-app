import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  analyticsCharts = [
    {
      name: 'patient-acrual',
      id: 111
    },
    {
      name: 'patient-gender',
      id: 222
    },
    {
      name: 'patient-disease',
      id: 333
    }

  ];

  seletChart (item) {
    this.router.navigate(['/home/analytics/chart', item.id]);
    console.log('seletChart');
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}

