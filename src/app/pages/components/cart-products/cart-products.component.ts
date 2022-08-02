import { Product } from 'src/app/shared/products.type';
import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/shared/services/add-to-cart.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss'],
})
export class CartProductsComponent implements OnInit {
  cartProducts!: Product[];
  constructor(private cartService: AddToCartService) {}

  ngOnInit(): void {
    this.getcartProducts();
  }
  getcartProducts() {
    this.cartService.cartItems.subscribe((data: any) => {
      this.cartProducts = data;
    });
  }
  increaseQuantity(product: Product) {
    this.icreaseCounter();
    this.cartProducts.map((item) => {
      if (item.id === product.id) {
        item.quantity = item.quantity + 1;
        this.cartService.addToCartItems(this.cartProducts);
      }
    });
  }
  decreaseQuantity(product: Product) {
    if (product.quantity === 0) {
      return;
    } else {
      this.decreaseCounter();
      this.cartProducts.map((item) => {
        if (item.id === product.id) {
          item.quantity = item.quantity - 1;
          this.cartService.addToCartItems(this.cartProducts);
        }
      });
    }
  }
  removeProduct(product: Product) {
    this.decreaseCounter(product.quantity);
    this.cartProducts = this.cartProducts.filter(
      (item) => item.id != product.id
    );
    this.cartService.addToCartItems(this.cartProducts);
  }
  icreaseCounter() {
    let cartCounter = 0;
    this.cartService.cartProductsLength.subscribe((data: any) => {
      cartCounter = data;
    });
    this.cartService.addCartProducts(cartCounter + 1);
  }
  decreaseCounter(value?: number) {
    let cartCounter = 0;
    this.cartService.cartProductsLength.subscribe((data: any) => {
      cartCounter = data;
    });
    this.cartService.addCartProducts(
      value ? cartCounter - value : cartCounter - 1
    );
  }
}
