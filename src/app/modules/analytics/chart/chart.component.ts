import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AnalyticsService} from './../analytics.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
public  itemId;
  constructor(private route: ActivatedRoute, private analyticsService: AnalyticsService) { }
    selectedId: any;
    selectedType: any;
    public chartList = [];
  ngOnInit() {
    // this.selectedId = parseInt(this.route.snapshot.paramMap.get('id'));
    // console.log('ngOnInit', this.selectedId);
    // this.itemId = this.selectedId;
    this.chartList = this.analyticsService.getChartType();
    this.route.paramMap.subscribe(params => {
        this.selectedId = +params.get('id');
        this.selectedType = _.filter(this.selectedId , (key) => key.id = this.selectedId);
       }

    );
  }

}
