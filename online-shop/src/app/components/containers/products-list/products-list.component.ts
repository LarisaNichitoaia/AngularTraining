import { Component } from '@angular/core';
import { Observable, takeWhile } from 'rxjs';
import { AppRoutes } from 'src/app/modules/shared/routs/route.enum';
import { NavigationService } from 'src/app/services/navigation.service';
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

  constructor(private router: NavigationService, private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().pipe(takeWhile(() => this.isAlive)).subscribe(
      (data)=>this.products = data
      );    
  }

  navigateToProductDetail(productId: String) {
    this.router.navigateToWithParams(AppRoutes.ProductDetails, productId);
  }

  navigateToShoppingCart() {
    this.router.navigateTo(AppRoutes.ShoppingCart);
  }

  navigateToAddForm(){
    this.router.navigateTo(AppRoutes.ProductAddForm);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
