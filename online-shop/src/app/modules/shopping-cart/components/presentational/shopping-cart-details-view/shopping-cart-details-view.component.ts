import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ProductWithQuantities } from 'src/app/modules/shared/types/products-with-quantities.types';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent {
  @Input() productsWithQuantities: ProductWithQuantities[] | undefined;
  @Output() removeFromCart: EventEmitter<string> = new EventEmitter<string>();
  @Output() createOrder: EventEmitter<string> = new EventEmitter<string>();

  removeProductFromCart(productId: string) {
    this.removeFromCart.emit(productId);
  }

  toCreateOrder(customerId: string) {
    this.createOrder.emit(customerId);
  }
}
