import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosEnComponent } from './productos-en.component';

describe('ProductosEnComponent', () => {
  let component: ProductosEnComponent;
  let fixture: ComponentFixture<ProductosEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
