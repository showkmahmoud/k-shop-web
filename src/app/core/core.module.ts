import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpperNavbarComponent } from './components/upper-navbar/upper-navbar.component';

@NgModule({
  declarations: [NavbarComponent, UpperNavbarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, UpperNavbarComponent],
})
export class CoreModule {}
