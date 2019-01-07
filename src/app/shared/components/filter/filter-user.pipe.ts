import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value: any, input: string, searchableListUser = 'keyword') {

    if (input && searchableListUser) {
      input = input.toLowerCase();
      return value.filter((user: any) => {
        var isTrue = false;
        switch (searchableListUser) {
          case 'keyword':
            console.log(searchableListUser);
            if (user['email'].indexOf(input) > -1 ||
              user['name'].indexOf(input) > -1 ||
              user['nip'].indexOf(input) > -1 ||
              user['admin'].toString().indexOf(input) > -1 ||
              user['active'].toString().indexOf(input) > -1) {
              isTrue = true;
            }
            if (isTrue) {
              return user;
            }
            
            break;
          default:
            if (user[searchableListUser].toString().toLowerCase().indexOf(input) > -1) {
              isTrue = true;
            }
            if (isTrue) {
              return user;
            }
            break;
        }
      })
    }
    return value;
  }
}
