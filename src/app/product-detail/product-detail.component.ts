import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  product :any;
  id:any;
  
  constructor(private _Activatedroute:ActivatedRoute,private _router:Router,
    private _productService:ProductService) { }

  sub:any;
  ngOnInit()
  {
    this.sub = this._Activatedroute.paramMap.subscribe(params =>{
      console.log(params);
      this.id=params.get('id');
      let products = this._productService.getProducts();
      this.product=products.find(p=>p.productID==this.id);
    });
  }
onBack():void{
  this._router.navigate(['product']);
}
}
