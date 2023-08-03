import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-add-form',
  templateUrl: './products-add-form.component.html',
  styleUrls: ['./products-add-form.component.scss']
})
export class ProductsAddFormComponent {
  isAlive: boolean = true;
  constructor(private router: Router, private productService: ProductsService) { }

  createProduct(addProduct: Product) {
    this.productService.postProduct(addProduct).pipe(takeWhile(() => this.isAlive)).subscribe( () => {
        this.router.navigate(['/products'])
      });
  }

  back(){
    this.router.navigate(['/products']);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
