import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { PlanosComponent } from './planos/planos.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      { path: '', redirectTo: 'planos', pathMatch: 'full' },
      // { path: 'planos', component: PlanosComponent, data: {animationState: 'planos' } },
      { path: 'planos', component: PlanosComponent, data: {animationState: 'planos', title: 'Planos'} },
      { path: 'checkout', component: CheckoutComponent, data: { animationState: 'checkout' } },
      { path: 'confirmacao', component: ConfirmacaoComponent, data: { animationState: 'confirmacao' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
