import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpperNavbarComponent } from './components/upper-navbar/upper-navbar.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [NavbarComponent, UpperNavbarComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxBootstrapIconsModule.pick(allIcons),
    RouterModule,
  ],
  exports: [NavbarComponent, UpperNavbarComponent],
})
export class CoreModule {}
