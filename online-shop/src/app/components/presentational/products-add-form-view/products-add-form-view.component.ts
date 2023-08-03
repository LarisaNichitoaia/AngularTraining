import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-products-add-form-view',
  templateUrl: './products-add-form-view.component.html',
  styleUrls: ['./products-add-form-view.component.scss']
})
export class ProductsAddFormViewComponent {
  @Output() createProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  constructor(private router: Router) { }
  
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

  onSubmit() {
      const newProduct = {
        id:'',
        name: this.productForm.value.name!,
        category: this.productForm.value.category!,
        image: this.productForm.value.image!,
        price: this.productForm.value.price!,
        description: this.productForm.value.description!
      }
      this.createProduct.emit(newProduct);
    }

    goBack() {
      this.back.emit();
    }
}
