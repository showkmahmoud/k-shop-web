import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() products!: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.products) {
      const categories = this.router.url.split('/')[2];
      console.log(categories);
    }
  }
}
