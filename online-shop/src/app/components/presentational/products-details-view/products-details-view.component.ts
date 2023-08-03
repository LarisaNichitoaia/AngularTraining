import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../modules/shared/types/products.types';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss']
})
export class ProductsDetailsViewComponent {
  @Input() product: Product | undefined;
  @Output() productToBuy: EventEmitter<number> = new EventEmitter<number>();
  @Output() quantity: number | undefined;
  @Output() deleteProduct: EventEmitter<void> = new EventEmitter<void>();
  @Output() productForm: EventEmitter<void> = new EventEmitter<void>();

  onQuantityChange(event: number) {
    if (this.quantity) {
      this.quantity = event.valueOf();
    }
  }

  onProductBuy() {
    if (this.quantity) {
      this.productToBuy.emit(this.quantity);
    }
  }

  toDeleteProduct() {
    this.deleteProduct.emit();
  }

  toProductsForm() {
    this.productForm.emit();
  }
}
