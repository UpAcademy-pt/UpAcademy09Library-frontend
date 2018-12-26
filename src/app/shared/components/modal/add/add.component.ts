import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CatalogApiService } from 'src/app/shared/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

bookForm: FormGroup;
book_title:string='';
book_author:string='';
book_description:string=''
book_isbn:number=null;
isLoadingResults = false;

  
closeResult: string;

  constructor(private modalService: NgbModal, private catalogApi: CatalogApiService, private formBuilder: FormBuilder, ) { }

  ngOnInit() {

    this.bookForm = this.formBuilder.group({
      'book_title' : [null],
      'book_author' : [null],
      'book_description' : [null],
      'book_isbn' : [null]
    });
    
  }
  open(content) {
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
