import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { car,ccar } from './bo/car';
import { CarService } from './car/car.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  carsToDisplay: ccar[] = [];
  jsText:string = '22';
  constructor(private db: AngularFireDatabase,private carsrv:CarService) {

  }
  ngOnInit() {
    this.loadCarsFromDb().forEach(x=>{
      console.log(x);
    });

    /* this.db.list('cars').push(itemToPush);

    var res = this.db.list('cars');
    res.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.cars.push(y as car);
        console.log(y);
      });
    }); */
  }
  loadCarsFromDb(){
    return this.carsrv.getCarsList().map(x=>{
      this.carsToDisplay=x
    });
  }
}