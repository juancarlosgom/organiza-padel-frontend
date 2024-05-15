import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntarsePartidasComponent } from './apuntarse-partidas.component';

describe('ApuntarsePartidasComponent', () => {
  let component: ApuntarsePartidasComponent;
  let fixture: ComponentFixture<ApuntarsePartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApuntarsePartidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApuntarsePartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
