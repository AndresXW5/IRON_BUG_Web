import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAlumnoComponent } from './profile-alumno.component';

describe('ProfileAlumnoComponent', () => {
  let component: ProfileAlumnoComponent;
  let fixture: ComponentFixture<ProfileAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
