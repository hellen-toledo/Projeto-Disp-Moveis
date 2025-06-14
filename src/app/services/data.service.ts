import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Dados iniciais dos produtos
  private products = [
    { id: 1, descricao: 'Smartphone XYZ Pro', valorNormal: 2499.90, valorDesconto: 1999.90, detalhes: 'Câmera de 108MP, 256GB de armazenamento, 8GB RAM, tela AMOLED 120Hz.' },
    { id: 2, descricao: 'Notebook Gamer Fire', valorNormal: 7899.00, valorDesconto: 6999.00, detalhes: 'Processador i7 12ª Gen, RTX 4060, 16GB DDR5, SSD 1TB NVMe, Tela 16" QHD.' },
    { id: 3, descricao: 'Smart TV 4K 55"', valorNormal: 3200.50, valorDesconto: 2799.99, detalhes: 'Resolução 4K UHD, HDR10+, Dolby Atmos, sistema operacional Tizen.' },
    { id: 4, descricao: 'Fone de Ouvido Bluetooth', valorNormal: 450.00, valorDesconto: 349.90, detalhes: 'Cancelamento de ruído ativo, 20h de bateria, case de carregamento sem fio.' },
    { id: 5, descricao: 'Cadeira Gamer Ergonômica', valorNormal: 1500.00, valorDesconto: 1199.90, detalhes: 'Ajuste de altura e inclinação, apoio de braço 4D, material em couro PU.' },
    { id: 6, descricao: 'Monitor Ultrawide 34"', valorNormal: 2800.00, valorDesconto: 2350.00, detalhes: 'Resolução 3440x1440, 144Hz, 1ms de tempo de resposta, FreeSync Premium.' },
    { id: 7, descricao: 'Teclado Mecânico RGB', valorNormal: 650.00, valorDesconto: 499.90, detalhes: 'Switches Red, ABNT2, iluminação RGB por tecla, descanso de pulso magnético.' },
    { id: 8, descricao: 'Mouse sem Fio Precision', valorNormal: 320.00, valorDesconto: 259.90, detalhes: 'Sensor de 16.000 DPI, 8 botões programáveis, bateria de longa duração.' },
    { id: 9, descricao: 'Console de Videogame PS', valorNormal: 4499.00, valorDesconto: 3999.00, detalhes: 'Edição com leitor de disco, inclui um controle DualSense, SSD de 825GB.' },
    { id: 10, descricao: 'Caixa de Som Inteligente', valorNormal: 299.00, valorDesconto: 229.00, detalhes: 'Assistente de voz integrado, som de alta fidelidade 360°, conectividade Wi-Fi e Bluetooth.' },
    { id: 11, descricao: 'Webcam Full HD', valorNormal: 400.00, valorDesconto: 319.90, detalhes: 'Resolução 1080p a 60fps, foco automático, microfone com redução de ruído.' },
    { id: 12, descricao: 'HD Externo 2TB', valorNormal: 550.00, valorDesconto: 480.00, detalhes: 'Conexão USB 3.2, design portátil e compacto, compatível com PC e Mac.' },
  ];

  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  private customer = new BehaviorSubject<any>(null);
  customer$ = this.customer.asObservable();

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }

  addToCart(product: any) {
    const currentCart = this.cart.getValue();
    this.cart.next([...currentCart, product]);
  }

  getCart() {
    return this.cart.getValue();
  }
  
  clearCart() {
      this.cart.next([]);
  }

  saveCustomer(customerData: any) {
    this.customer.next(customerData);
  }

  getCustomer() {
      return this.customer.getValue();
  }
}