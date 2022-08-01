import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToWhishListService {
  private wishedProducts: any = new BehaviorSubject(0);
  wishedProductsLength = this.wishedProducts.asObservable();
  constructor() {}
  addWishedProduct(value: number) {
    this.wishedProducts.next(value);
  }
}
