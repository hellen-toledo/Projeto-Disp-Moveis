import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  // Objeto para armazenar os dados do formulário
  customerData = {
    nome: '',
    endereco: '',
    cep: '',
    cidade: '',
    bairro: '',
    estado: '',
    telefone: ''
  };

  isEditing = false; // Flag para saber se estamos a editar ou a criar

  constructor(
    private dataService: DataService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Verifica se já existe um cliente no serviço de dados
    const existingCustomer = this.dataService.getCustomer();
    if (existingCustomer) {
      this.isEditing = true;
      // Se existe, preenche o formulário com os dados existentes
      this.customerData = { ...existingCustomer };
    }
  }

  // Função chamada quando o formulário é submetido
  async onSubmit() {
    // Validação para garantir que nenhum campo está vazio
    const isInvalid = Object.values(this.customerData).some(value => value.trim() === '');
    if (isInvalid) {
      const alert = await this.alertController.create({
        header: 'Erro de Validação',
        message: 'Todos os campos são obrigatórios.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Se o formulário for válido, guarda os dados
    this.dataService.saveCustomer(this.customerData);
    // E navega de volta para a página da conta (Tab2)
    this.router.navigate(['/tabs/tab2']);
  }
}
