import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { PlanosComponent } from './planos/planos.component';

const routes: Routes = [
  { path: '', redirectTo: 'planos', pathMatch: 'full' },
  { path: 'planos', component: PlanosComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
