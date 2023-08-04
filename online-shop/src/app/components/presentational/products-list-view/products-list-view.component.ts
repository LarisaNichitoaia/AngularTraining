import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../modules/shared/types/products.types';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss']
})
export class ProductsListViewComponent {
  @Input() products: Product[] | undefined;
  @Output() productSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() shoppingCart: EventEmitter<void> = new EventEmitter<void>();
  @Output() addProduct: EventEmitter<void> = new EventEmitter<void>();
}
