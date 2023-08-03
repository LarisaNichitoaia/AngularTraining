import { Injectable } from '@angular/core';
import { ProductWithQuantities } from '../../shared/types/products-with-quantities.types';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCart: ProductWithQuantities[] = [];

  constructor() { }

  getProductsFromCart(): ProductWithQuantities[]|undefined{
    return this.shoppingCart;
  }

  addToCart(productWithQuantity: ProductWithQuantities){
    const index = this.shoppingCart?.findIndex(product => product.id === productWithQuantity.id);
    if(index!==-1){
      this.shoppingCart[index].quantity = this.shoppingCart[index].quantity + productWithQuantity.quantity;
    }
    else{
      this.shoppingCart?.push(productWithQuantity);
    }
  }

  removeFromCart(productId: string){
    const index = this.shoppingCart?.findIndex(product => product.id === productId);
    if(index!==-1){
      this.shoppingCart.splice(index,1);
    }
  }
}
