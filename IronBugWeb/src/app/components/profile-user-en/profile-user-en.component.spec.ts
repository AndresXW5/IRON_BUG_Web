import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserEnComponent } from './profile-user-en.component';

describe('ProfileUserEnComponent', () => {
  let component: ProfileUserEnComponent;
  let fixture: ComponentFixture<ProfileUserEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
