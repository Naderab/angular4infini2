import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {
  productUrl:string = "http://localhost:3000/products";
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<Product[]>(this.productUrl)
  }
  getProductById(id:number){
    return this.http.get<Product>(this.productUrl+'/'+id)
  }
  addProduct(product:Product){
    return this.http.post(this.productUrl,product)
  }
  updateProduct(id:number,product:Product){
    return this.http.put(this.productUrl+'/'+id,product)
  }
  deleteProduct(id:number){
    return this.http.delete(this.productUrl+'/'+id)
  }
}
