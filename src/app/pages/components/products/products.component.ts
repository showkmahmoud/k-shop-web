import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productsData } from 'src/app/shared/products.data';
import { Product } from 'src/app/shared/products.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() products!: Product[];
  productsData: Product[] = productsData;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.productsData);
    // if (!this.products) {
    //   const categories = this.router.url.split('/')[2];
    //   console.log(categories);
    // }
  }
}
