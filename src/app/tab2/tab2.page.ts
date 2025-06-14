import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    standalone: false,
})
export class Tab2Page {
  customer$: Observable<any>;

  constructor(private dataService: DataService) {
    this.customer$ = this.dataService.customer$;
  }
}