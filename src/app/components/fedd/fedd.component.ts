import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ChatMessage } from 'src/app/models/ChatMessage.model';

@Component({
  selector: 'app-fedd',
  templateUrl: './fedd.component.html',
  styleUrls: ['./fedd.component.css']
})

export class FeddComponent implements OnInit, OnChanges {

  feed: AngularFireList<ChatMessage[]>;
  constructor(
    private _chat: ChatService
  ) { }

  ngOnInit() {
    console.log('feed initial!')
    this.feed = this._chat.getMessages();
  }
  ngOnChanges() {
    this.feed = this._chat.getMessages();
  }

}
