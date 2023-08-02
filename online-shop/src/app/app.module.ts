import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsDetailsViewComponent } from './components/presentational/products-details-view/products-details-view.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { IconButtonComponent } from './modules/shared/components/presentational/icon-button/icon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductsListViewComponent,
    ProductsDetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule,
    IconButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
