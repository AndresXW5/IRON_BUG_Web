import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProfeComponent } from './register-profe.component';

describe('RegisterProfeComponent', () => {
  let component: RegisterProfeComponent;
  let fixture: ComponentFixture<RegisterProfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterProfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
