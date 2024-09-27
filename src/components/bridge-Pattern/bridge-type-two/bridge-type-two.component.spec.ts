import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeTypeTwoComponent } from './bridge-type-two.component';

describe('BridgeTypeTwoComponent', () => {
  let component: BridgeTypeTwoComponent;
  let fixture: ComponentFixture<BridgeTypeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridgeTypeTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridgeTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
