import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlumnoEnComponent } from './editar-alumno-en.component';

describe('EditarAlumnoEnComponent', () => {
  let component: EditarAlumnoEnComponent;
  let fixture: ComponentFixture<EditarAlumnoEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlumnoEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAlumnoEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
