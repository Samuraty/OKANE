import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {
    transform(input: string, args: string): any {
        if (!input) {
          return '';
        }
        return input.replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
}