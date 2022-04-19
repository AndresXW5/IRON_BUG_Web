import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAdminComponent } from './ranking-admin.component';

describe('RankingAdminComponent', () => {
  let component: RankingAdminComponent;
  let fixture: ComponentFixture<RankingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
