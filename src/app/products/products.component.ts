import { Component, OnInit} from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string = "Welcome to products component"
  products : Product[] = [];
  constructor(private ps: ProductService,private calculService:CalculService,private consumerProduct:ConsumerProductService) {
    //ps= new ProductService();
   }


  ngOnInit(): void {
    //this.products = this.ps.products;
    this.consumerProduct.getProducts().subscribe({
      next : (data)=> this.products = data,
      error : (error)=> console.log(error),
      complete : ()=> console.log("I m finishing"),
  })
  }

  Buy(id:number){
    this.products.map((p)=>p.id == id && p.quantity-- );
  }

  Like(id:number){
    this.products.map((p)=>p.id == id && p.like++)
  }
  nombre!:number;
  Bilan(){
    this.nombre=this.calculService.getNumberOf(this.products,"quantity",0);
  }

  

}
