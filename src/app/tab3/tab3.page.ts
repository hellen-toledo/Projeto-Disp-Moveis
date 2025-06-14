import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  cart$: Observable<any[]>;
  frete = 21.54;
  subtotal = 0;
  total = 0;

  constructor(
    private dataService: DataService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.cart$ = this.dataService.cart$;
    this.cart$.subscribe(cartItems => {
      this.calculateTotals(cartItems);
    });
  }

  calculateTotals(cartItems: any[]) {
    this.subtotal = cartItems.reduce((sum, item) => sum + item.valorDesconto, 0);
    this.total = this.subtotal + this.frete;
  }

  async handleCheckout() {
    const customer = this.dataService.getCustomer();
    if (!customer) {
      const alert = await this.alertController.create({
        header: 'Cadastro Necessário',
        message: 'Por favor, cadastre os seus dados na aba "Conta" para finalizar a compra.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          },
          {
            text: 'Ir para Conta',
            handler: () => {
              this.router.navigate(['/tabs/tab2']);
            },
          },
        ],
      });
      await alert.present();
      return;
    }
    // Se o cliente existe, navega para a página de resultado
    this.router.navigate(['/result']);
  }
}
