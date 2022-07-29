import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesLandingComponent } from './pages/components/categories-landing/categories-landing.component';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'k-shop', pathMatch: 'full' },
  {
    path: 'k-shop',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'k-shop/:category',
    component: CategoriesLandingComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
