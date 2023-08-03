import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductWithQuantities } from '../../../modules/shared/types/products-with-quantities.types';
import { Product } from '../../../modules/shared/types/products.types';
import { ShoppingCartService } from '../../../modules/shopping-cart/services/shopping-cart.service';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  isAlive: boolean = true;
  product: Product | undefined;
  constructor(private router: Router, private route: ActivatedRoute, private shoppingCart: ShoppingCartService, private productService: ProductsService) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProduct(productId).pipe(takeWhile(() => this.isAlive)).subscribe({ next: (data: Product | undefined) => this.product = data, error: () => this.router.navigate(['/products']) });
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
      this.router.navigate(['/products']);
    }
  }

  productForm() {
    if (this.product) {
      this.router.navigate(['/product-form', this.product.id])
    }
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
