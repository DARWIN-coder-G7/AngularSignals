import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeTypeOneComponent } from './bridge-type-one.component';

describe('BridgeTypeOneComponent', () => {
  let component: BridgeTypeOneComponent;
  let fixture: ComponentFixture<BridgeTypeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridgeTypeOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridgeTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
