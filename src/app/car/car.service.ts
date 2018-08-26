import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map, filter, scan } from 'rxjs/operators';

import { car } from '../bo/car';


@Injectable()
export class CarService {

  private basePath = '/items';
  carsRef: AngularFireList<car>;

  constructor(private db: AngularFireDatabase) {
    this.carsRef = db.list('/cars');
  }

  getCarsList(): Observable<car[]> {
    return this.carsRef.snapshotChanges().pipe(
        map((arr) => {
      return arr.map((snap) => 
      
            //snap.payload.val()
           Object.assign(snap.payload.val(),{$key:snap.payload.key}) 
        );
    }));
  }

  getcar(key: string): Observable<car | null> {
    const carPath = `${this.basePath}/${key}`;
    const currentCar = this.db.object(carPath).valueChanges() as Observable<car | null>;
    return currentCar;
  }

  createcar(car: car): void {
    this.carsRef.push(car);
  }

  updatecar(key: string, value: any): void {
    this.carsRef.update(key, value);
  }

  deletecar(key: string): void {
    this.carsRef.remove(key);
  }

  deleteAll(): void {
    this.carsRef.remove();
  }

  // Default error handling for all actions
  private handleError(error: Error) {
    console.error(error);
  }
}