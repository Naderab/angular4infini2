import { Injectable } from '@angular/core';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = [
    {id:1,title:'produit 1',price:100,quantity:10,like:2,picture:'https://celio.tn/media/catalog/product/t/-/t-shirt-col-rond-100-coton-noir-1100206-1-product_1_1.jpg'},
    {id:2,title:'produit 2',price:15,quantity:0,like:10,picture:'https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg'},
    {id:3,title:'produit 3',price:60,quantity:120,like:0,picture:'https://m.media-amazon.com/images/I/61gqx7hslmL._UX569_.jpg'}
  ];
  constructor() { }
  addProduct(product:Product){
    this.products.push(product)
  }
}
