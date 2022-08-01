import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { navbarData } from 'src/app/shared/navbar.data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdwenNavItem, NavbarItem } from 'src/app/shared/navbar.type';
import { AddToCartService } from 'src/app/shared/services/add-to-cart.service';

@Component({
  selector: 'app-upper-navbar',
  templateUrl: './upper-navbar.component.html',
  styleUrls: ['./upper-navbar.component.scss'],
})
export class UpperNavbarComponent implements OnInit {
  navbar: (NavbarItem | DropdwenNavItem)[] = navbarData;
  form!: FormGroup;
  menuOpen: boolean = true;
  cartItems!: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cartService: AddToCartService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: '',
    });
    this.cartService.cartProductsLength.subscribe((data: number) => {
      this.cartItems = data;
    });
  }
  onSubmit(form: any) {
    this.router.navigate([`/k-shop/search`], {
      queryParams: { product: `${form.search}` },
    });
    this.form.reset();
    this.menuOpen = true;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
