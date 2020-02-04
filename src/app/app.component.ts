import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  
  private available: Array<Car> = [];
  public searchText:string = "";
  
  ngOnInit() {
    this.available.push(new Car("scenic.png", "Renault","Scenic", new Date(2007,1,1),new Date(2018,4,1),5000,"renault.png","great"));
    this.available.push(new Car("ibiza.png", "Seat","Ibiza", new Date(2003,1,1),new Date(2018,3,1),1200,"seat.png","great"));
    this.available.push(new Car("megane.png", "Renault","Megane", new Date(2007,1,1),new Date(2018,3,1),3500,"renault.png","crashed"));
    this.available.push(new Car("tesla.png", "Tesla","Model3", new Date(2008,1,1),new Date(2018,3,1),4000,"tesla.png","crashed"));
    this.available.push(new Car("laguna.png", "Renault","Laguna", new Date(2006,1,1),new Date(2018,2,1),2500,"renault.png","problems"));
    this.available.push(new Car("mercedes.png", "Mercedes","GLA", new Date(2009,1,1),new Date(2019,1,1),6500,"mercedes.png","normal"));
  }

  public removeCar(car : Car):void{
    const index = this.available.indexOf(car, 0);
    if (index > -1) {
      this.available.splice(index, 1);
    }
    let temporal = this.available;
    this.available = [];
    this.available = temporal;
  }

  public getSale(car : Car):void{
    car.price *= 0.9;
    let temporal = this.available;
    this.available = [];
    this.available = temporal;
  }
}
