import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../dashboard-data.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(
    private dashboardDataService: DashboardDataService,
  ) { }

  ngOnInit() {
  }

}
