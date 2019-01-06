import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AnalyticsService} from './analytics.service';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  public analyticsCharts = [];

  selectChart (item) {
    console.log('seletcChart', item);
    this.router.navigate(['/home/analytics/chart', item.id]);
  }

  constructor(private router: Router, private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.analyticsCharts = this.analyticsService.getChartType();

  }

}

