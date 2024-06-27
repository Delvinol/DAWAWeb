import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'clientes', pathMatch: 'full', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule), canActivate: [authGuard] },
  { path: 'users', pathMatch: 'full', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule), canActivate: [authGuard] },
  { path: 'paseadores', pathMatch: 'full', loadChildren: () => import('./modules/paseador/paseador.module').then(m => m.ProductsModule), canActivate: [authGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
