import { Component, ElementRef, OnInit } from '@angular/core';
import { navbarData } from 'src/app/shared/navbar.data';
import { DropdwenNavItem, NavbarItem } from 'src/app/shared/navbar.type';
import { AddToWhishListService } from 'src/app/shared/services/add-to-whish-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class NavbarComponent implements OnInit {
  navbarData: (NavbarItem | DropdwenNavItem)[] = navbarData;
  dropDownOpen: boolean = false;
  menuOpen: boolean = true;
  whishListLength: number = 0;
  constructor(
    private _eref: ElementRef,
    private wishListService: AddToWhishListService
  ) {}

  ngOnInit(): void {
    this.wishListService.wishedProductsLength.subscribe((data: any) => {
      this.whishListLength = data;
    });
  }
  toggle() {
    this.dropDownOpen = !this.dropDownOpen;
  }
  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target))
      this.dropDownOpen = false;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  onClose() {
    this.menuOpen = true;
    this.dropDownOpen = false;
  }
}
