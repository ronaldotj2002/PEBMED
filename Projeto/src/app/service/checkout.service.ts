import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpClient: HttpClient) { }

  getListaPlanos() {
    let url = 'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer';
      return this.httpClient.get<any>(url)
      
  }

  postCompraPlano(body:any) {
    let url = 'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription';
    return this.httpClient.post<any>(url, body)
  }
}
