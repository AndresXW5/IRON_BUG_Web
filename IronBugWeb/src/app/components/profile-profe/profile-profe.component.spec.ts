import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProfeComponent } from './profile-profe.component';

describe('ProfileProfeComponent', () => {
  let component: ProfileProfeComponent;
  let fixture: ComponentFixture<ProfileProfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileProfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
