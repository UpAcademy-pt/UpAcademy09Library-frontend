import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],


})
export class TableComponent implements OnInit {

  @Input() header: any;
  @Input() catalog$: any;
  @Input() theme = 'table-light';
  @Input() isBook = true;

  // pagination
  p = 1;

  // filter var
  selectedTypeSearch = 'keyword';
  searchableList: string;
  selectedTypeSearchOutput = 'Palavra-Chave';

  constructor(public router: Router, private dataService: DataService) { }

  ngOnInit() { }

 

  // search type
  selectChangeHandler(event: any) {
    // search selected
    this.selectedTypeSearch = event.target.value;
    // translate
    this.translatePlaceholder(this.selectedTypeSearch);
    // search Type to FilterPipe
    return this.searchableList = this.selectedTypeSearch;
  }


  clickItem(item) {
    this.router.navigate(['bookdetailsadmin', item.id]);
  }

  changeImg(image: any) {
    image.src = '/assets/bookFull.png';
  }

  translatePlaceholder(selectedTypeSearch) {
    switch (selectedTypeSearch) {
      case 'keyword':
        return this.selectedTypeSearchOutput = 'Palavra-Chave';
        console.log(this.selectedTypeSearchOutput);
        break;
      case 'title':
        return this.selectedTypeSearchOutput = 'Título';
        console.log(this.selectedTypeSearchOutput);
        break;
      case 'author':
        return this.selectedTypeSearchOutput = 'Autor';
        console.log(this.selectedTypeSearchOutput);
        break;
      case 'description':
        return this.selectedTypeSearchOutput = 'Descrição';
        console.log(this.selectedTypeSearchOutput);
        break;
      case 'isbn':
        return this.selectedTypeSearchOutput = 'Isbn';
        console.log(this.selectedTypeSearchOutput);
        break;
      case 'topic':
        return this.selectedTypeSearchOutput = 'Tópico';
        console.log(this.selectedTypeSearchOutput);
        break;
      default:
        console.log('erro');
        break;
    }
    return this.selectedTypeSearchOutput;
  }

}
