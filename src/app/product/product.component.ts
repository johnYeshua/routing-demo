import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  pro_obj: any;
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.pro_obj = this.productService.getProducts();
  }

}
