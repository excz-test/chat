import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app'
import { ChatMessage } from '../models/ChatMessage.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  user: any;
  chatMessages: AngularFireList<ChatMessage[]>;
  chatMessage: ChatMessage;
  username: Observable<any>;

  constructor(
    private _db: AngularFireDatabase,
    private _afAuth: AngularFireAuth
  ) {
    // this._afAuth.authState.subscribe(auth => {
    //   if (auth !== undefined && auth !== null) {
    //     this.user = auth;
    //   }
    // });
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    //const email = this.user.email;
    const email1 = 'excz@edu.ec';
    this.chatMessages = this.getMessages();
    const afList = this._db.list('mensajes');
    afList.push({
      message: msg,
      email: email1,
      username: 'test-excz',
      timeSent: timestamp
    });
    const listObservable = afList.snapshotChanges();
  listObservable.subscribe();

    console.log('Llamada a sendMessage()')
  }
/**
 * email?: string;
    username?: string;
    message?: string;
    timeSent?: Date = new Date();
 */
  getMessages(): AngularFireList<ChatMessage[]> {
    //query to create our message feed binding
    return this._db.list('messages', ref =>
      ref.limitToLast(25)
    );
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();
    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();
    return (date + ' ' + time);
  }
}


