import { Injectable } from '@angular/core';
import { ProductWithQuantities } from '../../shared/types/products-with-quantities.types';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCart: ProductWithQuantities[] = [];

  constructor() { }

  getProductsFromCart(): ProductWithQuantities[] | undefined {
    return this.shoppingCart;
  }

  addToCart(productWithQuantity: ProductWithQuantities) {
    const productInCart = this.shoppingCart.find(product => product.id === productWithQuantity.id);

    if (productInCart) {
      productInCart.quantity += productWithQuantity.quantity;
    } else {
      this.shoppingCart.push(productWithQuantity);
    }
  }

  removeFromCart(productId: string) {
    this.shoppingCart = this.shoppingCart.filter(product => product.id !== productId);
  }
}
