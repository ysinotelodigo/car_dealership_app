import { Pipe, PipeTransform } from '@angular/core';
    @Pipe({
        name: 'state'
    })
export class StatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        let icon:string ="";
        switch(value){
            case "great":
                icon = "fas fa-star";
                break;
            case "problems":
                icon = "fas fa-oil-can";
                break;
            case "crashed":
                icon = "fas fa-car-crash";
                break;
            case "normal":
                icon = "fas fa-star-half-alt";
                break;
        }
        return icon;
    }
}