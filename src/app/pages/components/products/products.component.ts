import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { productsData } from 'src/app/shared/products.data';
import { Product } from 'src/app/shared/products.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() products!: Product[];
  @Input() productLimit!: number;

  productsData!: Product[];
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url.includes('categories')) {
      if (!this.productsData) {
        this.productsData = productsData.filter(
          (product) => product.category === this.router.url.split('/')[3]
        );
      }
      this.router.url;
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd | any) => {
          if (event.url.includes('categories')) {
            const category = event.url.split('/')[3];
            this.productsData = productsData.filter(
              (product) => product.category === category
            );
          } else {
          }
        });
    } else {
      this.productsData = this.products ? this.products : productsData;
    }
  }
  rateValue(starsNumber: number) {
    return new Array(starsNumber);
  }
}
