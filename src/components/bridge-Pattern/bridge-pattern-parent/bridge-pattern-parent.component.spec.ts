import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgePatternParentComponent } from './bridge-pattern-parent.component';

describe('BridgePatternParentComponent', () => {
  let component: BridgePatternParentComponent;
  let fixture: ComponentFixture<BridgePatternParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridgePatternParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridgePatternParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
