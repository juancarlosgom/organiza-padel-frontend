import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResultsPageComponent } from './add-results-page.component';

describe('AddResultsPageComponent', () => {
  let component: AddResultsPageComponent;
  let fixture: ComponentFixture<AddResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddResultsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
