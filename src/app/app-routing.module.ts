import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContanctComponent } from './contanct/contanct.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'contact', component:ContanctComponent},
  {path: 'product', component:ProductComponent,
          children:[
            {path: ':id', component:ProductDetailComponent}
          ]
  },
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
