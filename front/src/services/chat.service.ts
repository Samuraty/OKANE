import { Injectable } from "../../node_modules/@angular/core";
import * as io from 'socket.io-client';
import { environment } from '../environments/environment'

interface Message {
  origin:string;
  content:string;
}

@Injectable()
export class ChatService {

  socket:SocketIOClient.Socket;
  messages:Array<Message> = [{origin: "", content:""}];
  BASE_URL: string = environment.BASEURL;

  constructor(){

    // Connect to websocket for chat
    
    this.socket = io(this.BASE_URL);
    this.socket.on('connect',() =>console.log("Connected to WS"));

    // Save messages into array as they arrive from server
    this.socket.on('chatMessage',(data) => {
      // Actually push the message when arrives
      this.messages.push({
        origin:'Server',
        content:data
      });
    })

  }

  sendMessage(m:string){
    console.log(`Sending message -> ${m}`);
    this.socket.emit('chatMessage', m);
    this.messages.push({
      origin:'Me',
      content:m
    });
  }

}