import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { productsData } from 'src/app/shared/products.data';
import { Product } from 'src/app/shared/products.type';
import { AddToCartService } from 'src/app/shared/services/add-to-cart.service';
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
    private wishListService: AddToWhishListService,
    private cartService: AddToCartService
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
        if (this.router.url.includes('wishlist')) {
          this.wishListFilter();
        }
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
