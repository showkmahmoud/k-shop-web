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
  addToCart(product: Product) {
    let cartCounter = 0;
    let cartItems: Product[] = [];
    //increasing the counter
    this.cartService.cartProductsLength.subscribe((data: any) => {
      cartCounter = data;
    });
    this.cartService.addCartProducts(cartCounter + 1);
    //adding the product to the cart
    this.cartService.cartItems.subscribe((data: any) => {
      cartItems = data;
    });
    const item = cartItems.find((i) => i.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      product.quantity += 1;
      cartItems.push(product);
    }
    this.cartService.addToCartItems(cartItems);
  }
}
