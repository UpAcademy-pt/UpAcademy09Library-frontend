import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {

  // falta colocar para caso seja keyword fazer a pesquisa geral
  transform(value: any, input: string, searchableList: any) {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (catalog: any) {
        var isTrue = false;
        for (var type in searchableList) {
          if (catalog[searchableList[type]].toLowerCase().indexOf(input) > -1) {
            isTrue = true;
          }
          if (isTrue) {
            return catalog;
          }
        }
      })
    }
    return value;
  }
}
