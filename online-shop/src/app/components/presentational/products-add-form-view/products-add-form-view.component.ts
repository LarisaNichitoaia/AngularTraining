import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-products-add-form-view',
  templateUrl: './products-add-form-view.component.html',
  styleUrls: ['./products-add-form-view.component.scss']
})
export class ProductsAddFormViewComponent {
  @Input() productForm!:FormGroup;
  @Output() createProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
}
