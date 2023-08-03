import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/modules/shared/types/products.types';


@Component({
  selector: 'app-products-form-view',
  templateUrl: './products-form-view.component.html',
  styleUrls: ['./products-form-view.component.scss']
})
export class ProductsFormViewComponent implements OnInit {
  @Input() product!: Product;
  @Output() updateProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    image: new FormControl(''),
    price: new FormControl(0, [
      Validators.required,
      Validators.pattern("^[0-9]+$"),
    ]),
    description: new FormControl('', Validators.required),
  })

  ngOnInit() {
    if (this.product) {
      this.productForm.patchValue(this.product);
    }
  }

  onSubmit() {
    if (this.product) {
      const newProduct = {
        id: this.product.id,
        name: this.productForm.value.name!,
        category: this.productForm.value.category!,
        image: this.productForm.value.image!,
        price: this.productForm.value.price!,
        description: this.productForm.value.description!
      };
      this.updateProduct.emit(newProduct);
    }
  }

  goBack() {
    this.back.emit();
  }
}
