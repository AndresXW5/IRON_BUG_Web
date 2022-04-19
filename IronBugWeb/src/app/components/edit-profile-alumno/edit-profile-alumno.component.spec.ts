import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileAlumnoComponent } from './edit-profile-alumno.component';

describe('EditProfileAlumnoComponent', () => {
  let component: EditProfileAlumnoComponent;
  let fixture: ComponentFixture<EditProfileAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
