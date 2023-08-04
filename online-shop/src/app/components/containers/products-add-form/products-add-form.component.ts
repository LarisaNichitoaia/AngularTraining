import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs';
import { AppRoutes } from 'src/app/modules/shared/routs/route.enum';
import { Product } from 'src/app/modules/shared/types/products.types';
import { NavigationService } from 'src/app/services/navigation.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-add-form',
  templateUrl: './products-add-form.component.html',
  styleUrls: ['./products-add-form.component.scss']
})
export class ProductsAddFormComponent {
  isAlive: boolean = true;
  constructor(private router: NavigationService, private productService: ProductsService) { }

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

  onCreateProduct(addProduct: Product) {
    addProduct.id='';
    this.productService.postProduct(addProduct).pipe(takeWhile(() => this.isAlive)).subscribe( () => {
        this.router.navigateTo(AppRoutes.Products)
      });
  }

  onBack(){
    this.router.navigateTo(AppRoutes.Products);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
