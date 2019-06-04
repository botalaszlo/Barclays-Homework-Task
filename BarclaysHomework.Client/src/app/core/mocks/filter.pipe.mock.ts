import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filterCountry'})
export class MockPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        return [];
      }
}
