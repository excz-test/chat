import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  private message: string;

  constructor(
    private _chat: ChatService
  ) { }

  ngOnInit() {
  }

  send() {
    //console.log(this.message);
    this._chat.sendMessage(this.message);
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

}
