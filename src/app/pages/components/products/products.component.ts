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
  noData: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('first');
    if (this.router.url.includes('categories')) {
      if (!this.productsData) {
        this.productsData = productsData.filter(
          (product) => product.category === this.router.url.split('/')[3]
        );
      }

      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd | any) => {
          const category = event.url.split('/')[3];
          this.productsData = productsData.filter(
            (product) => product.category === category
          );
        });
    } else if (this.router.url.includes('search')) {
      if (!this.productsData) {
        this.productsData = productsData.filter((product) =>
          product.title.includes(this.router.url.split('/')[3])
        );
      }
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd | any) => {
          const value = event.url.split('/')[3];
          console.log(value);
          console.log(event.url);
          this.productsData = productsData.filter((product) =>
            product.title.includes(value)
          );
          console.log(this.productsData);
        });
      if (this.productsData.length == 0) {
        this.noData = true;
      }
    } else {
      this.productsData = this.products ? this.products : productsData;
    }
  }
  filterProduct(type: string) {
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
  }
  rateValue(starsNumber: number) {
    return new Array(starsNumber);
  }
}
