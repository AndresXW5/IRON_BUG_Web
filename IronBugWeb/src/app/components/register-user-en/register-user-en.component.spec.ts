import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserEnComponent } from './register-user-en.component';

describe('RegisterUserEnComponent', () => {
  let component: RegisterUserEnComponent;
  let fixture: ComponentFixture<RegisterUserEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
