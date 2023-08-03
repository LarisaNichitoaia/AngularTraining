import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsDetailsViewComponent } from './components/presentational/products-details-view/products-details-view.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { IconButtonComponent } from './modules/shared/components/presentational/icon-button/icon-button.component';
import { ShoppingCartService } from './modules/shopping-cart/services/shopping-cart.service';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { ProductsFormComponent } from './components/containers/products-form/products-form.component';
import { ProductsFormViewComponent } from './components/presentational/products-form-view/products-form-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsAddFormComponent } from './components/containers/products-add-form/products-add-form.component';
import { ProductsAddFormViewComponent } from './components/presentational/products-add-form-view/products-add-form-view.component';
import { LoginComponent } from './components/containers/login/login.component';
import { LoginViewComponent } from './components/presentational/login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductsListViewComponent,
    ProductsDetailsViewComponent,
    ProductsFormComponent,
    ProductsFormViewComponent,
    ProductsAddFormComponent,
    ProductsAddFormViewComponent,
    LoginComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule,
    IconButtonComponent,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
