import { Component } from '@angular/core';
import { mockProducts } from 'src/app/mocks/products.mocks';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
  product: Product = mockProducts[0];
}
