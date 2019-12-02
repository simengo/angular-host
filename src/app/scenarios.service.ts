import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { scenarios } from 'src/app/scenarios';
import { queue } from 'src/app/queue';

@Injectable({
  providedIn: 'root'
})
export class ScenariosService {
  private scenarios = scenarios;
  private queue = queue;
  //url = 'http://localhost:3000/';
  //options = {};

  constructor( /*private http: HttpClient*/) { }

  /*getQueue(){
    return this.http.get(this.url + 'queue');
  }

  getScenarios(){
    return this.http.get(this.url + 'scenarios');
  }

  addToQueue(scenario, scenarioId){
    console.log(this.url + 'scenarios' + '/' + scenarioId);
    return this.http.delete(this.url + 'scenarios' + '/' + scenarioId, this.options);
  }

  removeFromQueue(scenario, scenarioId){

  }

  scenarioRequest(){

  }*/
  

  getQueue(){
    return this.queue;
  }

  getScenarios(){
    return this.scenarios;
  }

  addToQueue(scenario, scenarioId){
    this.scenarios.splice(scenarioId, 1);
    this.queue.push(scenario);
  }

  removeFromQueue(scenario, scenarioId){
    this.queue.splice(scenarioId,1);
    this.scenarios.push(scenario);
  }

  reset(){
    this.scenarios = scenarios;
    this.queue = queue;
  }

  scenarioRequest(){
    if(queue.length == 0 && scenarios.length == 0){
      console.log('No scenarios left');
    }

    if(this.queue[0] != null){
      console.log(this.queue[0]);
      let id = this.queue[0].id;
      this.queue.splice(0,1);
      return id;
    } else {
      console.log(this.scenarios[0])
      let id = this.scenarios[0].id;
      this.scenarios.splice(0,1);
      return id;
    }
  }
}
