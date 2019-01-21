import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AcountApiService } from 'src/app/shared/services/account/account-api.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { User, History } from 'src/app/shared/models';
import { ReplaySubject } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);
  public user$: ReplaySubject<any[]> = new ReplaySubject(1);
  public history$: ReplaySubject<any[]> = new ReplaySubject(1);
  public searchCatalog$: ReplaySubject<any[]> = new ReplaySubject(1);


  selectedTypeSearchCatalog = 'keyword';

  selectedTypeSearchOutput = 'Palavra-Chave';

  inputCatalog: any;

  user: User = new User();
  userid: string;
  history: History = new History();
  livros: any;
  set = false;
  selR = false;
  livro:any;


  
 
  favoritos: any[] = []

 resModal: BsModalRef;
  constructor( private dataservice: DataService,
    private acountApi: AcountApiService,
    private router: Router,
    private modalService: BsModalService
   ) 
   { 

      this.searchCatalog$ = this.dataservice.getCatalogByIsbn();
    }

    ngOnInit() {
      this.updateData();
      this.updateUser();
     
      this.userid = this.acountApi.getCurrentId();
      this.acountApi.getAllFavourites(+this.userid).subscribe((favoritos: any[]) => {
        this.favoritos = favoritos;
      }, (error) => {
        console.log(error);
  
      })
  
      this.searchCatalog$.subscribe((a: any[]) => {
        this.livros = a;
      }, (error) => {
        console.log(error);
  
      })
    }
  
  
  
    openModal(template: TemplateRef<any>) {
      this.resModal = this.modalService.show(template);
    }
  
  
    updateData() {
      this.dataservice.getCatalogByIsbn();
    }
  
    updateUser() {
      this.acountApi.getAllFavourites(+this.userid);
    }
  
    itemInFav(item) {
  
      var result = this.favoritos.filter((favorito) => {
        return item === favorito.isbn
      })
      return result.length > 0 ? true : false;
    }
  
    onChangeInputCatalog() {
      this.searchCatalog$ = this.dataservice.queryCatalog(this.selectedTypeSearchCatalog, this.inputCatalog);
  console.log(this.inputCatalog);
  console.log(this.selectedTypeSearchCatalog);
    }
  
       // search type
       selectChangeHandler(event: any) {
        this.selectedTypeSearchCatalog = event.target.value;
      
      }
    public getBooksSameIsbn(item) {
      var resultAux=[]
      var result={stateAvailable:[],stateOthers:[]}
      var stateAvailable=[]
      var stateOthers=[]
  
      resultAux = this.livros.filter((livro) => {
        return item.isbn === livro.isbn
      })
  
      resultAux.map((livro) => {
        if (livro.state==='available') {
          stateAvailable.push(livro)
        }else{
          stateOthers.push(livro)
        }
      })
      result.stateAvailable=stateAvailable;
      result.stateOthers=stateOthers;
      return result;
  
    }
  
  
  
   
    clickItem(item) {
    
  this.router.navigate(['bookdetails', item.isbn]);
  console.log(item);
    }
  
    
    css() { this.set = true; }
    css2() { this.selR = true; }
  

}
