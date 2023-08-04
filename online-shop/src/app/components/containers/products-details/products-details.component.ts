import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs';
import { AppRoutes } from 'src/app/modules/shared/routs/route.enum';
import { NavigationService } from 'src/app/services/navigation.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProductWithQuantities } from '../../../modules/shared/types/products-with-quantities.types';
import { Product } from '../../../modules/shared/types/products.types';
import { ShoppingCartService } from '../../../modules/shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  isAlive: boolean = true;
  product: Product | undefined;
  productId!:string;
  constructor(private router: NavigationService, private route: ActivatedRoute, private shoppingCart: ShoppingCartService, private productService: ProductsService) { }

  ngOnInit() {
    this.route.params.pipe(takeWhile(() => this.isAlive)).subscribe((params) =>  {this.productId =  params['id']})
    if (this.productId) {
      this.productService.getProduct(this.productId).pipe(takeWhile(() => this.isAlive)).subscribe(
        { 
          next: (data: Product | undefined) => this.product = data, error: () => this.router.navigateTo(AppRoutes.Products) 
      });
    }
  }

  toBuyProduct(quantity: number) {
    if (this.product) {
      const productWithQuantities: ProductWithQuantities = { ...this.product, quantity: quantity };
      this.shoppingCart.addToCart(productWithQuantities);
      alert("Product added!");
    }
  }

  deleteProductFromDatabase() {
    if (this.product) {
      this.productService.deleteProduct(this.product.id).subscribe();
      this.router.navigateTo(AppRoutes.Products);
    }
  }

  productForm() {
    if (this.product) {
      this.router.navigateToWithParams(AppRoutes.ProductForm,this.product.id);
    }
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
