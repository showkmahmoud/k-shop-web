import { Component, OnInit } from '@angular/core';
import { productsData } from 'src/app/shared/products.data';
import { Product, PRODUCT_TYPE } from 'src/app/shared/products.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productLength!: number;
  productsData!: Product[];
  constructor() {}

  ngOnInit(): void {
    this.productsData = productsData.filter(
      (item) => item.type === PRODUCT_TYPE.recentlyViewed
    );
  }
  rateValue(starsNumber: number) {
    return new Array(starsNumber);
  }
  displayMore() {
    this.productLength = productsData.length;
  }
}
