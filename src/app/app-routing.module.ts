import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    // Rota para a página de detalhes do produto, que recebe um 'id' como parâmetro
    path: 'product/:id',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    // Rota para a página de cadastro de cliente
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    // Rota para a página de resultado da compra
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
