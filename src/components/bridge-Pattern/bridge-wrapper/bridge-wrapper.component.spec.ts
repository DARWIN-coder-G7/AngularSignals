import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeWrapperComponent } from './bridge-wrapper.component';

describe('BridgeWrapperComponent', () => {
  let component: BridgeWrapperComponent;
  let fixture: ComponentFixture<BridgeWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridgeWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridgeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
