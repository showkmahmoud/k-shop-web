import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    LandingLayoutComponent,
    NotFoundComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
