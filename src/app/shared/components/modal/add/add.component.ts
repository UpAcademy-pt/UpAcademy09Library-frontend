import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataService } from 'src/app/shared/services';
import { Catalog } from 'src/app/shared/models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  modalRef: BsModalRef;
  catalog: Catalog = new Catalog();


  constructor(private modalService: BsModalService, private dataService: DataService) { }

  ngOnInit() { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    this.dataService.createCatalog(this.catalog);
  }

  onClose() {
    this.catalog.title = '';
    this.catalog.description = '';
    this.catalog.author = '';
    this.catalog.topic = '';
    this.catalog.location = '';
    this.catalog.isbn = '';
  }

  public getBookInfoGogleApi() {
    console.log(this.catalog.title);
    var bookList = this.dataService.getBookInfoGogleApi(this.catalog.title).subscribe(
      (res:any) => { 
        console.log("testes");
        console.log(res.items);
        return res;
      },
      error => { console.error(error);
      });;
      console.log(bookList);

      
  }
  //POR AQUI FUNÇÃO QUE PROCURE OS DADOS DO LIVRO PARA O QUAL SE INSERIU o TITULO
}
