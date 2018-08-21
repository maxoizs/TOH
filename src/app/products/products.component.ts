import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products = Products;
  
  searchProducts(value:string):void {
    this.products =Products.filter(p=> 
       p.name.includes(value) || p.id.toString()==value || p.price.toString() == value);
    console.log(this.products);
    }

  constructor() { }

  ngOnInit() {
  }
}