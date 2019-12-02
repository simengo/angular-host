import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DashboardDataService } from '../dashboard-data.service';

@Component({
  selector: 'app-air-chart',
  templateUrl: './air-chart.component.html',
  styleUrls: ['./air-chart.component.css']
})
export class AirChartComponent implements OnInit {

  constructor(
    private dashboardDataService: DashboardDataService,
  ) {}

  ngOnInit() {
    this.dashboardDataService.change.subscribe(data =>{
      let air = data[1];
      this.addData(air);
    })
  }

  addData(data){
    this.chartData[0].data.push(data);
    this.chartLabels.push('');
  }

  // Air Chart: 
  chartLegend = true;
  chartPlugins = [];
  chartType = 'line';
  chartData: ChartDataSets[] = [
    { data: [4], label: 'Air Quality' },
  ];
  chartLabels: Label[] = [''];
  chartOptions = {
    responsive: true,
  };
  chartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,191,255,0.28)',
    },
  ];

}
