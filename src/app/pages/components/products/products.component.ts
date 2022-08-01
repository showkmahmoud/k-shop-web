import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  url!: string;
  productsData!: Product[];
  noData: boolean = false;
  whishedProduct: any = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.filterProduct();
  }
  filterProduct() {
    if (this.router.url.includes('categories')) {
      this.url = 'categories';
      this.activatedRoute.queryParams.subscribe((params: any) => {
        this.productsData = productsData.filter(
          (product) => product.category === params.category
        );
        this.dataCheck();
      });
    } else if (this.router.url.includes('search')) {
      this.url = 'search';
      this.activatedRoute.queryParams.subscribe((params: any) => {
        this.productsData = productsData.filter((product) =>
          product.title.includes(params.product)
        );
        this.dataCheck();
      });
    } else {
      this.productsData = this.products ? this.products : productsData;
    }
  }
  dataCheck() {
    if (this.productsData.length === 0) {
      this.noData = true;
    } else {
      this.noData = false;
    }
  }
  rateValue(starsNumber: number) {
    return new Array(starsNumber);
  }
  addedToWhishList(index: number) {
    this.productsData[index].wishedProduct =
      !this.productsData[index].wishedProduct;
  }
}
