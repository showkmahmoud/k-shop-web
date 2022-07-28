import { Component, ElementRef, OnInit } from '@angular/core';
import {
  DropdwenNavItem,
  navbarData,
  NavbarItem,
} from 'src/app/shared/navbar.data';

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
  constructor(private _eref: ElementRef) {}

  ngOnInit(): void {}
  toggle() {
    this.dropDownOpen = !this.dropDownOpen;
  }
  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target))
      // or some similar check
      this.dropDownOpen = false;
  }
}
