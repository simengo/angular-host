import { Injectable, Output, EventEmitter } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  data = [];
  @Output() change: EventEmitter<any> = new EventEmitter();
  ws;
  url  = 'ws://localhost:6321/public';

  constructor() { 
    this.init(this.url);
  }

  onMessage(){
    this.ws.subscribe(
      (msg) => this.printer(msg),
      (err) => this.retry(err),
      () => this.retry('Disconnected')
    );
  }

  init(url){
    this.ws = webSocket(url);
    this.onMessage();
  }

  send(msg){
    this.ws.next(msg);
  }

  retry(err){
    console.log(err);
    this.sleep(5000);
    this.init(this.url);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  printer(msg){
    this.send("Nachricht erhalten!");
    this.data[0] = msg.valueOf().co2;
    this.data[1] = msg.valueOf().air;
    console.log(this.data);
    this.change.emit(this.data);
  }


}
