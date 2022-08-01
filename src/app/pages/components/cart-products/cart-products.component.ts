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
    this.cartService.cartItems.subscribe((data: any) => {
      this.cartProducts = data;
      console.log(this.cartProducts);
    });
  }
}
