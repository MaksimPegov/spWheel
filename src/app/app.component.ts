import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items:FirebaseListObservable<any>;
  private name:any;
  private message:string ='';

  constructor(
    private _db: AngularFireDatabase,
    private _auth: AngularFireAuth){
      this.items = _db.list('/messages');
  }

  private Send(event){
    let text = event.currentTarget.value;
    this.items.push({message: text});
    this.message = '';

  }

}
