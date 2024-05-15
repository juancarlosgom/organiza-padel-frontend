import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarPistaPageComponent } from './reservar-pista-page.component';

describe('ReservarPistaPageComponent', () => {
  let component: ReservarPistaPageComponent;
  let fixture: ComponentFixture<ReservarPistaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservarPistaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservarPistaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
