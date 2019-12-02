import { Injectable, Output, EventEmitter } from '@angular/core';

import { WebSocketService } from 'src/app/web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  data = [];
  @Output() change: EventEmitter<any> = new EventEmitter();

  getData(data) {
    this.data = data;
    this.change.emit(this.data);
  }

  setData(){
    this.data[0] = Math.floor(Math.random() * 10); 
    this.data[1] = Math.floor(Math.random() * 10); 
    this.change.emit(this.data);
  }

  constructor( private webSocketService:WebSocketService ) {
    this.webSocketService.change.subscribe(data =>{
      this.data = data;
      this.change.emit(this.data);
    })
  }
}
