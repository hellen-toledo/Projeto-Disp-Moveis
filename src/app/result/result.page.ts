import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
  standalone: false,
})
export class ResultPage implements OnInit {
  // Observável para obter os itens do carrinho finalizado
  finalCart$: Observable<any[]>;
  frete = 21.54;
  subtotal = 0;
  total = 0;

  constructor(private dataService: DataService, private router: Router) {
    // Aponta para o carrinho atual, pois chegamos aqui imediatamente após o checkout
    this.finalCart$ = this.dataService.cart$;
  }

  ngOnInit() {
    // Subscreve ao carrinho para calcular os totais apenas uma vez
    this.finalCart$.pipe(first()).subscribe(cartItems => {
      this.calculateTotals(cartItems);
    });
  }

  // Calcula os totais com base nos itens do carrinho
  calculateTotals(cartItems: any[]) {
    this.subtotal = cartItems.reduce((sum, item) => sum + item.valorDesconto, 0);
    this.total = this.subtotal + this.frete;
  }

  // Função para voltar à página principal
  backToHome() {
    // 1. Limpa o carrinho de compras no serviço de dados
    this.dataService.clearCart();
    // 2. Navega de volta para a página inicial (Tab1)
    this.router.navigate(['/tabs/tab1']);
  }
}