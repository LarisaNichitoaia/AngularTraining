import { Component } from '@angular/core';
import { mockProducts } from 'src/app/mocks/products.mocks';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
    products: Product[] = mockProducts;
}
