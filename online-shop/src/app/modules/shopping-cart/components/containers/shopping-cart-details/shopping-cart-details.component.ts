import { Component } from '@angular/core';
import { Order } from 'src/app/modules/shared/types/orders.types';
import { ProductAndQuantities } from 'src/app/modules/shared/types/products-id-and-quantities.types';
import { ProductWithQuantities } from 'src/app/modules/shared/types/products-with-quantities.types';
import { OrderService } from '../../../services/order.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss']
})
export class ShoppingCartDetailsComponent {
  order: Order | undefined;
  constructor(private shoppingCart: ShoppingCartService, private orderService: OrderService) { }

  productsWithQuantities: ProductWithQuantities[] | undefined = this.shoppingCart.getProductsFromCart();

  removeFromCart(productId: string) {
    this.shoppingCart.removeFromCart(productId);
  }

  createOrder(customerId: string) {
    if (this.productsWithQuantities) {
      let productAndQuantity: ProductAndQuantities[] = [];
      for (let i = 0; i < this.productsWithQuantities.length; i++) {
        productAndQuantity.push({ productId: this.productsWithQuantities[i].id, quantity: this.productsWithQuantities[i].quantity })
      }
      this.order = {
        customerId: customerId,
        products: productAndQuantity
      }
      this.orderService.saveOrder(this.order).subscribe(
        ()=>productAndQuantity.forEach(product => this.removeFromCart(product.productId))
        );
      alert("Order created!");
      
    }
  }
}
