import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  isAlive: boolean = true;
  product!: Product ;
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductsService) { }


  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProduct(productId).pipe(takeWhile(() => this.isAlive))
        .subscribe((data) => this.product = data);
    }
  }

  updateProduct(updatedProduct: Product) {
    this.productService.updateProduct(updatedProduct).pipe(takeWhile(() => this.isAlive)).subscribe( () => {
        this.router.navigate(['/product-details', this.product.id])
      });
  }

  back(){
    this.router.navigate(['/product-details', this.product.id]);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}

