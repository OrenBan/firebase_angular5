import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import{environment} from '../environments/environment';
import { Observable } from 'rxjs';
import { CarComponent } from './car/car.component';
import { CarService } from './car/car.service';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfir),
    AngularFireDatabaseModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
