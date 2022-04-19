import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileProfeComponent } from './edit-profile-profe.component';

describe('EditProfileProfeComponent', () => {
  let component: EditProfileProfeComponent;
  let fixture: ComponentFixture<EditProfileProfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileProfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
