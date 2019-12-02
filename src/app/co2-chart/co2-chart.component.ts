import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DashboardDataService } from '../dashboard-data.service';


@Component({
  selector: 'app-co2-chart',
  templateUrl: './co2-chart.component.html',
  styleUrls: ['./co2-chart.component.css']
})
export class Co2ChartComponent implements OnInit {

  constructor(
    private dashboardDataService: DashboardDataService,
  ) { }

  ngOnInit() {
    this.dashboardDataService.change.subscribe(data =>{
      let co2 = data[0];
      this.addData(co2);
    })
  }

  addData(data){
    this.chartData[0].data.push(data);
    this.chartLabels.push('');
  }

  // CO2 Chart: 
  chartLegend = true;
  chartPlugins = [];
  chartType = 'line';
  chartData: ChartDataSets[] = [
    { data: [8], label: 'CO2 Emissions' },
  ];
  chartLabels: Label[] = [''];
  chartOptions = {
    responsive: true,
  };
  chartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(124,252,0,0.28)',
    },
  ];

}
