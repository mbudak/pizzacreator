import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOffersComponent } from './pizza-offers.component';

describe('PizzaOffersComponent', () => {
  let component: PizzaOffersComponent;
  let fixture: ComponentFixture<PizzaOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
