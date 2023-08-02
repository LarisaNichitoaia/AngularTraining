import { Component, Input, Output } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent {
  @Input() products: Product[] | undefined;
  @Input() quantities!: number[];
}
