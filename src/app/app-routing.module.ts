import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'level-one/:id/:name',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'level-two/:id/:name',
    loadChildren: () => import('./level-two/level-two.module').then( m => m.LevelTwoPageModule)
  },
  {
    path: 'carts/:id/:name',
    loadChildren: () => import('./carts/carts.module').then( m => m.CartsPageModule)
  },
  {
    path: 'main-categories',
    loadChildren: () => import('./main-categories/main-categories.module').then( m => m.MainCategoriesPageModule)
  },
  {
    path: 'products/:id/:name',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'product-type/:id/:name',
    loadChildren: () => import('./product-type/product-type.module').then( m => m.ProductTypePageModule)
  },
  {
    path: 'create-cart',
    loadChildren: () => import('./create-cart/create-cart.module').then( m => m.CreateCartPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'create-cart-product-type',
    loadChildren: () => import('./create-cart-product-type/create-cart-product-type.module').then( m => m.CreateCartProductTypePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
