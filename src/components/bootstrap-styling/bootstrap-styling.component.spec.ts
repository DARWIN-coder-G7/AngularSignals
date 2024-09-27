import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapStylingComponent } from './bootstrap-styling.component';

describe('BootstrapStylingComponent', () => {
  let component: BootstrapStylingComponent;
  let fixture: ComponentFixture<BootstrapStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapStylingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
