import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  
  private available: Array<Car> = [];

    

  ngOnInit() {
    this.available.push(new Car("scenic.png", "Renault","Scenic", new Date(2007,1,1),new Date(2018,4,1),5000,""));
    this.available.push(new Car("ibiza.png", "Seat","Ibiza", new Date(2003,1,1),new Date(2018,3,1),1200,""));
    this.available.push(new Car("megane.png", "Renault","Megane", new Date(2007,1,1),new Date(2018,3,1),3500,""));
    this.available.push(new Car("model3.png", "Tesla","Model3", new Date(2007,1,1),new Date(2018,3,1),4000,""));
    this.available.push(new Car("laguna.png", "Renault","Laguna", new Date(2006,1,1),new Date(2018,2,1),2500,""));
  }
}
