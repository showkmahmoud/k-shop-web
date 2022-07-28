import { NavbarItem, DropdwenNavItem } from './../../../shared/navbar.data';
import { Component, OnInit } from '@angular/core';
import { navbarData } from 'src/app/shared/navbar.data';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upper-navbar',
  templateUrl: './upper-navbar.component.html',
  styleUrls: ['./upper-navbar.component.scss'],
})
export class UpperNavbarComponent implements OnInit {
  navbar: (NavbarItem | DropdwenNavItem)[] = navbarData;
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: '',
    });
  }
  onSubmit(form: FormGroup) {
    console.log(form);
  }
}
