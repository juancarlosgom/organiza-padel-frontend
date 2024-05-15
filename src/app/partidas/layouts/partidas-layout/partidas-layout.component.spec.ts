import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasLayoutComponent } from './partidas-layout.component';

describe('PartidasLayoutComponent', () => {
  let component: PartidasLayoutComponent;
  let fixture: ComponentFixture<PartidasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidasLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartidasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
