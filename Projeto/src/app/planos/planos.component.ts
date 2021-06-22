import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from '../service/checkout.service';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {

  dadosPlanos: any;
  descontoAvista: any;
  descontoParcelado: any;
  tipoPlano: any;
  formaPagamento: any;

  constructor(
    private fb: FormBuilder,
    private CompraService: CheckoutService,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    this.carregarPlanos();
  } 

  selecPlano = this.fb.group({
    formaPagamento: new FormControl('', [Validators.required]),
  })

  
  carregarPlanos(){
    this.CompraService.getListaPlanos().subscribe(
      (res: any) => {
        this.dadosPlanos = res;
        this.descontoAvista = this.dadosPlanos[1].fullPrice - this.dadosPlanos[1].discountAmmount; 
        this.descontoParcelado = this.dadosPlanos[0].fullPrice - this.dadosPlanos[0].discountAmmount;
      }
    )
  }

  tipoPagamento(valor: any) {
    this.formaPagamento = valor
    console.log(this.formaPagamento)
  }

  planoSelecionado() {
    this.tipoPlano = this.selecPlano.getRawValue();  
    // this.formaPagamento = this.tipoPlano.formaPagamento
    console.log(this.formaPagamento) 
  }

  comprar() {
    // this.router.navigateByUrl('checkout');
    this.router.navigate(['/checkout'], { queryParams: { formaPagamento: `${this.formaPagamento}`} });
    this.planoSelecionado();
  }


}
