import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { CheckoutService } from '../service/checkout.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {

  dadosPlanos: any;  
  formaPagamento: any;
  mensagemerro = 'Ocorreu um erro ao listar os planos. Por favor, tente novamente.';

  constructor(
    private fb: FormBuilder,
    private CompraService: CheckoutService,
    private router: Router,
    private toastr: ToastrService,
    private titleService:Title
  ) { }
 
  ngOnInit(): void {
    this.carregarPlanos();
    this.titleService.setTitle('Planos');
  } 

  selecPlano = this.fb.group({
    formaPagamento: new FormControl('', [Validators.required]),
  })

  
  carregarPlanos(){
    this.CompraService.getListaPlanos().subscribe(
      (res: any) => {  
        this.dadosPlanos = res;      
      },
      (err) => {
        this.toastr.error(this.mensagemerro)    
        console.error("Error", err)
      }
    )
  }

  tipoPagamento(valor: any) {
    this.formaPagamento = valor
  }

  comprar() {
    this.router.navigate(['/checkout'], { queryParams: { formaPagamento: `${this.formaPagamento}`} });   
  }


}
