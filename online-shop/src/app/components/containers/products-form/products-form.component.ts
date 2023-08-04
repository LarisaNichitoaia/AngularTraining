import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  productId!:string;
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductsService) { }

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
    this.route.params.pipe(takeWhile(() => this.isAlive)).subscribe((params) =>  {this.productId =  params['id']})
    if (this.productId) {
      this.productService.getProduct(this.productId).pipe(takeWhile(() => this.isAlive))
        .subscribe((data) => this.product = data);
    }
  }

  updateProduct(updatedProduct: Product) {
    updatedProduct.id = this.product.id;
    this.productService.updateProduct(updatedProduct).pipe(takeWhile(() => this.isAlive)).subscribe( () => {
        this.router.navigate(['/product-details', this.product.id])
      });
  }

  onBack(){
    this.router.navigate(['/product-details', this.product.id]);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}

