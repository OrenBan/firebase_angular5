import { Component, OnInit ,Input} from '@angular/core';
import { car } from '../bo/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html'
  //styleUrls: ['./card.component.css']
})
export class CarComponent implements OnInit {
  @Input() car:car;
  @Input() mode:string;
  constructor() {

   }

  ngOnInit() {
  }

}