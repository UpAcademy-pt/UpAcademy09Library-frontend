import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor(
    private dataservice: DataService
  ) {
    this.catalog$ = this.dataservice.catalog$;
   }

  ngOnInit() {
  }

}
