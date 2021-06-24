import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanosComponent } from './planos/planos.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import ptBr from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(ptBr);
@NgModule({  
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
    }),
  ],
  declarations: [
    AppComponent,
    PlanosComponent,
    CheckoutComponent,
    ConfirmacaoComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
