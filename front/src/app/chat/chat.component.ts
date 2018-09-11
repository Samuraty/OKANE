//En desarrollo, no es 100% funcional aún

import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatBox;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
  }

}
