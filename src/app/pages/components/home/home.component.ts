import { AddToCartService } from './../../../shared/services/add-to-cart.service';
import { Component, OnInit } from '@angular/core';
import { productsData } from 'src/app/shared/products.data';
import { Product, PRODUCT_TYPE } from 'src/app/shared/products.type';
import { AddToWhishListService } from 'src/app/shared/services/add-to-whish-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productLength!: number;
  productsData = productsData;
  products!: Product[];
  constructor(
    private wishListService: AddToWhishListService,
    private cartService: AddToCartService
  ) {}

  ngOnInit(): void {
    this.products = productsData.filter(
      (item) => item.type === PRODUCT_TYPE.recentlyViewed
    );
  }
  rateValue(starsNumber: number) {
    return new Array(starsNumber);
  }
  displayMore() {
    if (this.productLength != this.productsData.length) {
      this.productLength = this.productsData.length;
    } else {
      this.productLength = 4;
    }
  }
  addToWhishList(id: number) {
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
      }
    });
  }
  addToCart(id: number) {
    let cartCounter = 0;
    let cartItems: Product[] = [];
    this.productsData.map((product) => {
      if (product.id === id) {
        product.quantity = product.quantity + 1;
        this.cartService.cartItems.subscribe((data: any) => {
          cartItems = data;
        });
        cartItems.push(product);
        this.cartService.addToCartItems(cartItems);
        this.cartService.cartProductsLength.subscribe((data: any) => {
          cartCounter = data;
        });
        this.cartService.addCartProducts(cartCounter + 1);
      }
    });
  }
}
