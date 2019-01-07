import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {


  transform(value: any, input: string, searchableList = 'keyword') {

    if (input && searchableList) {
      input = input.toLowerCase();
      return value.filter((catalog: any) => {
        var isTrue = false;
        switch (searchableList) {
          case 'keyword':
            console.log(searchableList);
            if (catalog['title'].indexOf(input) > -1     ||
              catalog['author'].indexOf(input) > -1      ||
              catalog['description'].indexOf(input) > -1 ||
              catalog['topic'].indexOf(input) > -1       ||
              catalog['isbn'].indexOf(input) > -1) {
              isTrue = true;
            }
            if (isTrue) {
              return catalog;
            }

            break;
          default:
            if (catalog[searchableList].toLowerCase().indexOf(input) > -1) {
              isTrue = true;
            }
            if (isTrue) {
              return catalog;
            }
            break;
        }
      })
    }
    return value;
  }
}
