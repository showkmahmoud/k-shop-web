import { Component, ElementRef, OnInit } from '@angular/core';
import { navbarData } from 'src/app/shared/navbar.data';
import { DropdwenNavItem, NavbarItem } from 'src/app/shared/navbar.type';

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

  constructor(private _eref: ElementRef) {}

  ngOnInit(): void {}
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
