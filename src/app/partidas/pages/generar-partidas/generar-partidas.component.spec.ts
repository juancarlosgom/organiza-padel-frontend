import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarPartidasComponent } from './generar-partidas.component';

describe('GenerarPartidasComponent', () => {
  let component: GenerarPartidasComponent;
  let fixture: ComponentFixture<GenerarPartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerarPartidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerarPartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
