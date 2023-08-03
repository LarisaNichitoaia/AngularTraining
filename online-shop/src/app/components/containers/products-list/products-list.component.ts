import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, takeWhile } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../../modules/shared/types/products.types';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent {
  isAlive:boolean=true;
  products!: Product[];
  productId$!: Observable<String>;

  constructor(private router: Router, private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().pipe(takeWhile(() => this.isAlive)).subscribe((data)=>this.products = data);    
  }

  navigateToProductDetail(productId: String) {
    this.router.navigate(['/product-details', productId]);
  }

  navigateToShoppingCart() {
    this.router.navigate(['/shopping-cart'])
  }

  navigateToAddForm(){
    this.router.navigate(['/product-add-form'])
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
