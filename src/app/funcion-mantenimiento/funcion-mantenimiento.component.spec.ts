import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionMantenimientoComponent } from './funcion-mantenimiento.component';

describe('FuncionMantenimientoComponent', () => {
  let component: FuncionMantenimientoComponent;
  let fixture: ComponentFixture<FuncionMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuncionMantenimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
