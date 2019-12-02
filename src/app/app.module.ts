import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatSidenavModule, MatListModule } from  '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScenarioListComponent } from './scenario-list/scenario-list.component';
import { StartComponent } from './start/start.component';
import { HelpComponent } from './help/help.component';
import { LearningContentsComponent } from './learning-contents/learning-contents.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { ChartComponent } from './chart/chart.component';
import { Co2ChartComponent } from './co2-chart/co2-chart.component';
import { AirChartComponent } from './air-chart/air-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ScenarioListComponent,
    StartComponent,
    HelpComponent,
    LearningContentsComponent,
    DashboardComponent,
    NavComponent,
    ChartComponent,
    Co2ChartComponent,
    AirChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatGridListModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: 'scenarios', component: ScenarioListComponent },
      { path: 'learning-contents', component: LearningContentsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'help', component: HelpComponent },
      { path: '', component: StartComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
