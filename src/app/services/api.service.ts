import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase:string= 'https://fakestoreapi.com/products';

  private _http = inject(HttpClient);



  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlBase);
  }

  getproductById(id:number):Observable<IProduct>{
    return this._http.get<IProduct>(`${this.urlBase}/${id}`);
  }
}
