import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTournamentComponent } from './layout-tournament.component';

describe('LayoutTournamentComponent', () => {
  let component: LayoutTournamentComponent;
  let fixture: ComponentFixture<LayoutTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutTournamentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
