import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/containers/login/login.component';
import { ProductsAddFormComponent } from './components/containers/products-add-form/products-add-form.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ProductsFormComponent } from './components/containers/products-form/products-form.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', canActivate: [authGuard], children: [
    { path: 'products', component: ProductsListComponent },
    { path: 'product-details/:id', component: ProductsDetailsComponent },
    { path: 'shopping-cart', component: ShoppingCartDetailsComponent },
    { path: 'product-form/:id', component: ProductsFormComponent },
    { path: 'product-add-form', component: ProductsAddFormComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
