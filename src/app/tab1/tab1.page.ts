import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  products: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }

}
