import { Component, OnInit } from '@angular/core';
import { ScenariosService } from '../scenarios.service';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {
  scenarios;
  queue;

  constructor( private scenariosService: ScenariosService ) { }

// Add scenario to queue and remove it from scenarios
addToQueue(scenario,scenarioId){
  //this.scenariosService.addToQueue(scenario,scenario.id).subscribe();
  this.scenariosService.addToQueue(scenario,scenarioId);
}

// Remove scenario from queue and put it back to the scenarios
removeFromQueue(scenario, queueId){
  this.scenariosService.removeFromQueue(scenario, queueId);
}

//
scenarioRequest(){
  this.scenariosService.scenarioRequest();
}

  ngOnInit() {
    /*this.scenariosService.getScenarios().subscribe((data:any[])=>{
      console.log(data);
      this.scenarios = data;
    })
    this.scenariosService.getQueue().subscribe((data:any[])=>{
      console.log(data);
      this.queue = data;
    })*/
    this.scenarios=this.scenariosService.getScenarios();
    this.queue=this.scenariosService.getQueue();
  }

}
