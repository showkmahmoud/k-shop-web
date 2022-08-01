import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoreModule } from '../core/core.module';
import { SwiperModule } from 'swiper/angular';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { ProductsComponent } from './components/products/products.component';
import { CartProductsComponent } from './components/cart-products/cart-products.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    LandingLayoutComponent,
    NotFoundComponent,
    HomeSliderComponent,
    ProductsComponent,
    CartProductsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    SwiperModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
})
export class PagesModule {}
