import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Accueil',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Se connecter',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Panier',
  },
  {
    path: 'product/:productId',
    component: ProductDetailsComponent,
    title: 'Détail produit',
  },
];
