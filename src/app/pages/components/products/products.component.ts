import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { productsData } from 'src/app/shared/products.data';
import { Product } from 'src/app/shared/products.type';
import { AddToWhishListService } from 'src/app/shared/services/add-to-whish-list.service';

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
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private wishListService: AddToWhishListService
  ) {}

  ngOnInit(): void {
    this.filterProduct();
  }
  filterProduct() {
    if (this.router.url.includes('categories')) {
      this.categoryFilter();
    } else if (this.router.url.includes('search')) {
      this.searchFilter();
    } else if (this.router.url.includes('wishlist')) {
      this.wishListFilter();
    } else {
      this.productsData = this.products ? this.products : productsData;
    }
  }
  categoryFilter() {
    this.url = 'categories';

    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.productsData = productsData.filter(
        (product) => product.category === params.category
      );
      this.productLimit = this.productsData.length;
      this.dataCheck();
    });
  }
  searchFilter() {
    this.url = 'search';
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.productsData = productsData.filter((product) =>
        product.title.includes(params.product)
      );
      this.productLimit = this.productsData.length;
      this.dataCheck();
    });
  }
  wishListFilter() {
    this.url = 'whishList';
    this.productsData = productsData.filter(
      (product) => product.wishedProduct == true
    );
    this.productLimit = this.productsData.length;
    this.dataCheck();
    console.log(this.productsData);
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
  addedToWhishList(id: number) {
    let counter = 0;
    this.productsData.map((product) => {
      if (product.id === id) {
        product.wishedProduct = !product.wishedProduct;
        this.wishListService.wishedProductsLength.subscribe((data: any) => {
          counter = data;
        });
        this.wishListService.addWishedProduct(
          product.wishedProduct == true ? counter + 1 : counter - 1
        );
        if (this.router.url.includes('wishlist')) {
          this.wishListFilter();
        }
      }
    });
  }
}
