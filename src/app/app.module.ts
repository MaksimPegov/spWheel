import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBa4kFyXdspW8EmZ5qx3XvHF7yqERKv3xY",
    authDomain: "spwheel-80b62.firebaseapp.com",
    databaseURL: "https://spwheel-80b62.firebaseio.com",
    projectId: "spwheel-80b62",
    storageBucket: "spwheel-80b62.appspot.com",
    messagingSenderId: "103060809567"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
