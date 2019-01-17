import { Component, OnInit, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-admin',
  templateUrl: './history-admin.component.html',
  styleUrls: ['./history-admin.component.css']
})
export class HistoryAdminComponent implements OnInit {
  // Injection
  @Input() history$: any;
  // Variables
  history: any;
  subscription: Subscription;

  constructor(private dataService: DataService, public router: Router) {}

  ngOnInit() {}

}
