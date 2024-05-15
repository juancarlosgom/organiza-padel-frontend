import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookGamesUserComponent } from './look-games-user.component';

describe('LookGamesUserComponent', () => {
  let component: LookGamesUserComponent;
  let fixture: ComponentFixture<LookGamesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LookGamesUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LookGamesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
