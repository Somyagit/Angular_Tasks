import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(input:any[],minValue:number, maxValue:number): any[] {
    let output:any[] = [];
      output =   input.filter( item =>(item["marks"] >=minValue )&& (item["marks"]<=maxValue) );
      return output;
  }

}
