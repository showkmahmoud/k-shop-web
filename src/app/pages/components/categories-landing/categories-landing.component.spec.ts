import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesLandingComponent } from './categories-landing.component';

describe('CategoriesLandingComponent', () => {
  let component: CategoriesLandingComponent;
  let fixture: ComponentFixture<CategoriesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
