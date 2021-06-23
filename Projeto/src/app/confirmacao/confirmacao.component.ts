import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {

  cpf: any;
  numParcelas: any;
  valorParcela: any;
  valorTotal: any;
  formaPagamento: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.formaPagamento = this.route.snapshot.queryParams.formaPagamento;    
    this.cpf = this.route.snapshot.queryParams.cpf;
    this.numParcelas = this.route.snapshot.queryParams.numParcelas;
    this.valorParcela = this.route.snapshot.queryParams.valorParcela;
    this.valorTotal = this.route.snapshot.queryParams.valorTotal;
    
  }


  voltarHome() {
    this.router.navigateByUrl('planos')
  }

}
