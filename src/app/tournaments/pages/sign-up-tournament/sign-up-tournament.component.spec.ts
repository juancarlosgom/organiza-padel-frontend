import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTournamentComponent } from './sign-up-tournament.component';

describe('SignUpTournamentComponent', () => {
  let component: SignUpTournamentComponent;
  let fixture: ComponentFixture<SignUpTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpTournamentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
