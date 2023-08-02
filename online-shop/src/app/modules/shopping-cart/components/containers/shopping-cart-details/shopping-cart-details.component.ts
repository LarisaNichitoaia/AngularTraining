import { Component } from '@angular/core';
import { mockProducts } from 'src/app/mocks/products.mocks';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss']
})
export class ShoppingCartDetailsComponent {
  products: Product[] = mockProducts;
  quantities: number[] = [];
  productId:number | undefined;

  ngOnInit() {
    if (this.products) {
      this.quantities = this.products.map(() => 0);
    }
  }

  increaseQuantity(index: number) {
    this.quantities[index]++;
  }

  decreaseQuantity(index: number) {
    if (this.quantities[index] > 0) {
      this.quantities[index]--;
    }
  }

}
