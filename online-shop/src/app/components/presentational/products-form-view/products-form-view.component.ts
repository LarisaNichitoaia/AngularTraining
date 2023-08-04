import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/modules/shared/types/products.types';


@Component({
  selector: 'app-products-form-view',
  templateUrl: './products-form-view.component.html',
  styleUrls: ['./products-form-view.component.scss']
})
export class ProductsFormViewComponent implements OnInit {
  @Input() productForm!:FormGroup;
  @Input() product!: Product;
  @Output() updateProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
    if (this.product) {
      this.productForm.patchValue(this.product);
    }
  }

}
