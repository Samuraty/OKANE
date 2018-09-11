import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'adCityFilter'
})
export class AdCityFilterPipe implements PipeTransform {
    transform(input: any, searchCity: string): any {
        if (!input || !searchCity) {
          return input;
        }
        return input.filter( ad =>
            ad.city.toLowerCase().indexOf(searchCity.toLowerCase()) !== -1); //filtra y muestra las ciudades que coincidan con lo que se ponga en searchCity en el HTML, cuando no existe es -1 por eso solo busca cuando es distinto de -1
    }
}


@Pipe({
    name: 'adHaveFilter'
})
export class AdHaveFilterPipe implements PipeTransform {
    transform(input: any, searchHave: string): any {
        if (!input || !searchHave) {
          return input;
        }
        return input.filter( ad =>
            ad.have.indexOf(searchHave) !== -1); 
    }
}

@Pipe({
    name: 'adWantFilter'
})
export class AdWantFilterPipe implements PipeTransform {
    transform(input: any, searchWant: string): any {
        if (!input || !searchWant) {
          return input;
        }
        return input.filter( ad =>
            ad.want.indexOf(searchWant) !== -1);
    }
}