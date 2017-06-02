import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hellow mother fuker';
  haha = 'Ich libe Dich'

  constructor(
    private _db: AngularFireDatabase,
    private _auth: AngularFireAuth){

  }
}
