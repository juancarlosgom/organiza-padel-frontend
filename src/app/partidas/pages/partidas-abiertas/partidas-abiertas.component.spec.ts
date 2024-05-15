import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasAbiertasComponent } from './partidas-abiertas.component';

describe('PartidasAbiertasComponent', () => {
  let component: PartidasAbiertasComponent;
  let fixture: ComponentFixture<PartidasAbiertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidasAbiertasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartidasAbiertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
