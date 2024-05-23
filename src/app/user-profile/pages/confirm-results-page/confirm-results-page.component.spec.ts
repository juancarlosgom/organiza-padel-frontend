import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmResultsPageComponent } from './confirm-results-page.component';

describe('ConfirmResultsPageComponent', () => {
  let component: ConfirmResultsPageComponent;
  let fixture: ComponentFixture<ConfirmResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmResultsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
