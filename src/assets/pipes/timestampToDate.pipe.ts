import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      return new Date(value * 1000).toLocaleString("es-CL", { timeZone: "America/Santiago" });
  }

}
