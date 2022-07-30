import { Component, Input, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {
    this.productsData = this.products ? this.products : productsData;
  }
  rateValue(starsNumber: number) {
    return new Array(starsNumber);
  }
}
