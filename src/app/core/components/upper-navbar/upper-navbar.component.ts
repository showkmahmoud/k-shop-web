import { Component, OnInit } from '@angular/core';
import { navbarData } from 'src/app/shared/navbar.data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdwenNavItem, NavbarItem } from 'src/app/shared/navbar.type';

@Component({
  selector: 'app-upper-navbar',
  templateUrl: './upper-navbar.component.html',
  styleUrls: ['./upper-navbar.component.scss'],
})
export class UpperNavbarComponent implements OnInit {
  navbar: (NavbarItem | DropdwenNavItem)[] = navbarData;
  form!: FormGroup;
  menuOpen: boolean = true;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: '',
    });
  }
  onSubmit(form: any) {
    console.log(form.search);
    this.menuOpen = false;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
