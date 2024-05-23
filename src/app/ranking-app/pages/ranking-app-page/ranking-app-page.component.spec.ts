import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAppPageComponent } from './ranking-app-page.component';

describe('RankingAppPageComponent', () => {
  let component: RankingAppPageComponent;
  let fixture: ComponentFixture<RankingAppPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingAppPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
