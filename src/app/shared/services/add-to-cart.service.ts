import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  private cartProductsNo: any = new BehaviorSubject(0);
  cartProductsLength = this.cartProductsNo.asObservable();
  cartItems: any = new BehaviorSubject([]);
  constructor() {}

  addCartProducts(value: number) {
    this.cartProductsNo.next(value);
  }
  addToCartItems(value: any) {
    this.cartItems.next(value);
  }
}
