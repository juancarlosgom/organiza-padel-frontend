import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTournamentLayoutComponent } from './create-tournament-layout.component';

describe('CreateTournamentLayoutComponent', () => {
  let component: CreateTournamentLayoutComponent;
  let fixture: ComponentFixture<CreateTournamentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTournamentLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTournamentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
