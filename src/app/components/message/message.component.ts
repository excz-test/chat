import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { AuthService } from 'src/app/services/auth.service';
import { ChatMessage } from 'src/app/models/ChatMessage.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userMail:string;
  username:string;
  messageContent: string;
  timestamp: Date = new Date();

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent= chatMessage.message;
    this.timestamp= chatMessage.timeSent;
    this.userMail = chatMessage.email;
    this.username= chatMessage.username;
  }

}
