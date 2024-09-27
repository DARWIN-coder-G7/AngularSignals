import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControllercustomComponent } from './form-controllercustom.component';

describe('FormControllercustomComponent', () => {
  let component: FormControllercustomComponent;
  let fixture: ComponentFixture<FormControllercustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControllercustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControllercustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
