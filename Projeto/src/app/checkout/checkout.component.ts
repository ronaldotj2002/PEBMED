import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CheckoutService } from '../service/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  valorFinalParcelado: any;
  listaParcelas: any;
  plano: any;
  formPagamento: any;
  valorAnual: any;
  mensagemerro = 'Ocorreu um erro interno ao validar os dados de compra. Por favor, tente novamente.';

  
  constructor(
    private compraService: CheckoutService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    ) { }

       
    ngOnInit() {
      this.listarPlanos()
      this.plano = this.route.snapshot.queryParams.formaPagamento;
      console.log("FORMA PAGAMENTO", this.plano)
      
      this.formPagamento = this.fb.group({
        numCartao:          new FormControl('', [Validators.required]),
        validade:           new FormControl('', [Validators.required]),
        cvv:                new FormControl('', [Validators.required]),
        nomeImpressoCartao: new FormControl('', [Validators.required]),
        cpf:                new FormControl('', [Validators.required]),
        cupom:              new FormControl(''),      
        parcelamento:       new FormControl('', this.plano == 'aVista' ? [] : [Validators.required]),
      })

    }
    
    listarPlanos() {
      
    this.compraService.getListaPlanos().subscribe(
      
      (res: any) =>{
        this.valorAnual = res[1].fullPrice - res[1].discountAmmount;        
        this.valorFinalParcelado = res[0].fullPrice - res[0].discountAmmount;

        this.listaParcelas = [
          { numParcelas: '1 x de', valorParcela: `${this.valorFinalParcelado / 1}` },
          { numParcelas: '2 x de', valorParcela: `${this.valorFinalParcelado / 2}` },
          { numParcelas: '3 x de', valorParcela: `${this.valorFinalParcelado / 3}` },
          { numParcelas: '4 x de', valorParcela: `${this.valorFinalParcelado / 4}` }, 
          { numParcelas: '5 x de', valorParcela: `${this.valorFinalParcelado / 5}` },
          { numParcelas: '6 x de', valorParcela: `${this.valorFinalParcelado / 6}` },
          { numParcelas: '7 x de', valorParcela: `${this.valorFinalParcelado / 7}` },
          { numParcelas: '8 x de', valorParcela: `${this.valorFinalParcelado / 8}` },
          { numParcelas: '9 x de', valorParcela: `${this.valorFinalParcelado / 9}` },
          { numParcelas: '10 x de',valorParcela: `${this.valorFinalParcelado / 10}` }        
        ]
             
      })
  }

  voltar() {
    this.router.navigateByUrl('planos');
  }

  finalizarCompra() {
    const body = this.formPagamento.getRawValue()   

      return new Promise<void>((resolve, reject) =>  {
        this.compraService.postCompraPlano(body).subscribe(
            (res: any) =>{
            console.log("resposta", res)
            console.log("body", body)
              this.router.navigateByUrl('confirmacao');
              // this.router.navigate(['/confirmacao'], { queryParams: { dadosConfirmacao: `${body}`} })
                resolve();
            },
            (error) => {
                this.mensagemerro
                console.error(error)
                reject();
            })
    });

  }

}

