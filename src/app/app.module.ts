import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LugaresService } from './services/lugares.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyCxGDvQ3QGX2rRwKkIbEaYscWekwTw8c_A',
  authDomain: 'platzisquare-7e8ce.firebaseapp.com',
  databaseURL: 'https://platzisquare-7e8ce.firebaseio.com',
  projectId: 'platzisquare-7e8ce',
  storageBucket: 'platzisquare-7e8ce.appspot.com',
  messagingSenderId: '59699983713'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LugaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
