import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!:Product;
  email:string=""
  constructor(private ps:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.product = new Product();
  }

  ajouter(){
    this.ps.addProduct(this.product)
    this.router.navigateByUrl('/products')
    console.log(this.product)
  }

}
