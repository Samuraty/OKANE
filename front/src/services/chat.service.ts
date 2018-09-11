//En desarrollo, no es 100% funcional aún


import { Injectable } from "../../node_modules/@angular/core";
import * as io from "socket.io-client";
import { environment } from "../environments/environment";
import { SessionService } from "./session";

interface Message {
  origin: string;
  content: string;
}

@Injectable()
export class ChatService {
  socket: SocketIOClient.Socket;
  messages: Array<Message> = [{ origin: "", content: "" }];
  BASE_URL: string = environment.BASEURL;

  constructor(public sessionService: SessionService) {
    this.sessionService.isLogged().subscribe(user => {
      this.socket = io(this.BASE_URL);
      this.socket.on("connect", () => console.log("Connected to WS"));

      // Save messages into array as they arrive from server
      this.socket.on("chatMessage", data => {
        // Actually push the message when arrives
        this.messages.push({
          origin: "Server",
          content: data
        });
      });
      this.socket.on(`${user._id}`, data => {
        // Actually push the message when arrives
        
      });
    });
    // Connect to websocket for chat
  }

  sendMessage(m: string) {
    console.log(`Sending message -> ${m}`);
    this.socket.emit("chatMessage", m);
    this.messages.push({
      origin: "Me",
      content: m
    });
  }
  sendMessageTo(m, id) {
    let myId = this.sessionService.user._id;
    let myName: string = this.sessionService.user.username;
    console.log(`Sending message -> ${m}`);
    this.socket.emit("messageTo", {m, id, myId});
    this.messages.push({
      origin: myName,
      content: m
    });
  }
}
