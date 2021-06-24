import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from '../service/checkout.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  valorComDescontoParcelado: any;
  listaParcelas: any;
  plano: any;
  formPagamento: any;
  valorComDescontoAvista: any;
  mensagemerro = 'Ocorreu um erro interno ao validar os dados de compra. Por favor, tente novamente.';
 
  
  constructor(
    private compraService: CheckoutService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toatr: ToastrService
    ) { }

       
    ngOnInit() {
      this.listarPlanos()
      this.plano = this.route.snapshot.queryParams.formaPagamento;
      
      this.formPagamento = this.fb.group({
        numCartao:          new FormControl('', [Validators.required]),
        validade:           new FormControl('', [Validators.required]),
        cvv:                new FormControl('', [Validators.required]),
        nomeImpressoCartao: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        cpf:                new FormControl('', [Validators.required]),
        cupom:              new FormControl(''),      
        parcelamento:       new FormControl('', this.plano == '1' ? [] : [Validators.required]),
      })

    }
  
    listarPlanos() {
      
    this.compraService.getListaPlanos().subscribe(
      
      (res: any) =>{
        this.valorComDescontoAvista = res[1].fullPrice - res[1].discountAmmount;        
        this.valorComDescontoParcelado = res[0].fullPrice - res[0].discountAmmount;

        this.listaParcelas = [
          { numParcelas: '1 x de', valorParcela: `${this.valorComDescontoParcelado / 1}` },
          { numParcelas: '2 x de', valorParcela: `${this.valorComDescontoParcelado / 2}` },
          { numParcelas: '3 x de', valorParcela: `${this.valorComDescontoParcelado / 3}` },
          { numParcelas: '4 x de', valorParcela: `${this.valorComDescontoParcelado / 4}` }, 
          { numParcelas: '5 x de', valorParcela: `${this.valorComDescontoParcelado / 5}` },
          { numParcelas: '6 x de', valorParcela: `${this.valorComDescontoParcelado / 6}` },
          { numParcelas: '7 x de', valorParcela: `${this.valorComDescontoParcelado / 7}` },
          { numParcelas: '8 x de', valorParcela: `${this.valorComDescontoParcelado / 8}` },
          { numParcelas: '9 x de', valorParcela: `${this.valorComDescontoParcelado / 9}` },
          { numParcelas: '10 x de',valorParcela: `${this.valorComDescontoParcelado / 10}` }        
        ]
             
      })
  }

  voltar() {
    this.router.navigate(['/planos'], { queryParams: { formaPagamento: `${this.plano}`} });
  }

  finalizarCompra() {
    const body = this.formPagamento.getRawValue()   
    const valor = this.plano == 'parcelado' ? this.valorComDescontoParcelado : this.valorComDescontoAvista
      return new Promise<void>((resolve, reject) =>  {
        this.compraService.postCompraPlano(body).subscribe(
            (res: any) =>{
              this.router.navigate(['/confirmacao'], { queryParams: { formaPagamento: `${this.plano}`, cpf: `${body.cpf}`,numParcelas: `${body.parcelamento.numParcelas}`,valorParcela: `${body.parcelamento.valorParcela}`, valorTotal: `${valor}` } })
                resolve();
            },
            (error) => {
              this.toatr.error(this.mensagemerro)                
                console.error(error)
                reject();
            })
    });

  }

}

