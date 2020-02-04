import { Pipe, PipeTransform } from '@angular/core';
    @Pipe({
        name: 'contains',
        pure: false
    })
export class ContainsPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if(args=="")
            return value;
        else
            return value.filter((x:any)=> {return  Object.values(x).some((y:any)=>{return  new String(y).toUpperCase().includes(args.toUpperCase());});});
    }
}