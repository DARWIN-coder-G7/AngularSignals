import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-controllercustom',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-controllercustom.component.html',
  styleUrls: ['./form-controllercustom.component.scss']
})
export class FormControllercustomComponent {
  private fb = inject(FormBuilder);
  hobbiesForm!: FormGroup<{
    hobbiesArray: FormArray<FormGroup<{
      qty: FormControl<string | null>;
      radio: FormControl<string | null>;
    }>>;
  }>;

  dosingForm = new FormGroup({
    dosing: this.fb.array([])
  });
 
  get hobbiesArray() {
    return this.hobbiesForm.get('hobbiesArray') as FormArray;
  }
 

ngOnInit(): void {
  this.hobbiesForm = new FormGroup({
    hobbiesArray: new FormArray([
      new FormGroup({
        qty: new FormControl(''),
        radio: new FormControl('') 
      })
    ])
  });
}

  createHobbyGroup(): FormGroup<{
    qty: FormControl<string | null>;
    radio: FormControl<string | null>;
  }> {
    return new FormGroup({
      qty: new FormControl('', Validators.required),
      radio: new FormControl('')
    });
  }

  getControl(idx: number, controlName: string): AbstractControl<{ qty: string | null; radio: string | null; }> | null {
    if (this.hobbiesForm && this.hobbiesForm.get('hobbiesArray')) {
      return this.hobbiesForm.get(`hobbiesArray.${idx}.${controlName}`);
    }
    return null;
  }

  addInputControl() {
    if (this.hobbiesForm) {
      const hobbiesArray = this.hobbiesForm.get('hobbiesArray') as FormArray;
      if (hobbiesArray && hobbiesArray.controls.length < 4) {
        hobbiesArray.push(this.createHobbyGroup());
      }
    }
  }

  removeInputControl(idx: number) {
    if (this.hobbiesForm) {
      const hobbiesArray = this.hobbiesForm.get('hobbiesArray') as FormArray;
      if (hobbiesArray) {
        hobbiesArray.removeAt(idx);
      }
    }
  }
}