import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false,
})
export class ProductDetailPage implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.dataService.getProductById(Number(id));
  }

  async addToCart() {
    this.dataService.addToCart(this.product);
    const toast = await this.toastController.create({
      message: `${this.product.descricao} adicionado ao carrinho!`,
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
