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
    apiKey: "AIzaSyDFnoD_8TUxTZ5k4Bq0DhvJi5qTrctCBH8",
    authDomain: "todo-98a9b.firebaseapp.com",
    databaseURL: "https://todo-98a9b.firebaseio.com",
    projectId: "todo-98a9b",
    storageBucket: "todo-98a9b.appspot.com",
    messagingSenderId: "238695718446"
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
