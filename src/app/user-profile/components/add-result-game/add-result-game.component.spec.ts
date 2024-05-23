import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResultGameComponent } from './add-result-game.component';

describe('AddResultGameComponent', () => {
  let component: AddResultGameComponent;
  let fixture: ComponentFixture<AddResultGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddResultGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddResultGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
