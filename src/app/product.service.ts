import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService
 {
public getProducts()
{
  let P_obj: Product[];
  P_obj = [new Product(1011,"Pen",1500),
          new Product(1012,"Memory Card",1200),
          new Product(1013,"PowerBank",2500),
          new Product(1014,"Books",3500),
          new Product(1015,"Pen Drive",1000),]

  return P_obj;
}

public getProduct(id:any)  //1013
{
let products : Product[] =this.getProducts();
return products.find(p=>p.productID==id)
}
  constructor() { }
}