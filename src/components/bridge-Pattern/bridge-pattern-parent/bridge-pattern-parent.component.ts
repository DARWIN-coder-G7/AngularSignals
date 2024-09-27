import { Component, computed, effect, Input, input, signal, TemplateRef } from '@angular/core';
import { BridgeWrapperComponent } from "../bridge-wrapper/bridge-wrapper.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { BridgeTypeOneComponent } from "../bridge-type-one/bridge-type-one.component";
import { BridgeTypeTwoComponent } from "../bridge-type-two/bridge-type-two.component";
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
export interface Tile {
  color?: string;
  cols: number;
  rows: number;
  text: string;
  template: TemplateRef<any>
}
@Component({
  selector: 'app-bridge-pattern-parent',
  standalone: true,
  imports: [CommonModule,
    BridgeWrapperComponent,
    MatGridListModule,
    BridgeTypeOneComponent,
    BridgeTypeTwoComponent,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule],
  templateUrl: './bridge-pattern-parent.component.html',
  styleUrl: './bridge-pattern-parent.component.scss'
})
export class BridgePatternParentComponent {
  animals = [
    { name: 'ONE', sound: 0 },
    { name: 'TWO', sound: 1 },
    { name: 'THREE', sound: 2 },
    { name: 'FOUR', sound: 3 },
  ];
  selectFormControl = new FormControl(0);
  grid = input<Tile[]>();
  gridSignal = signal<Tile[]>([]);

  ngOnInit(){
    this.changeLayout();
  }
  
  ngAfterViewInit() {
    this.selectFormControl.valueChanges.subscribe((value: any) => {
      if (value > 0) {
        const currentGrid = [...this.gridSignal() as Tile[]];
        if (currentGrid[2]) {
          currentGrid[2] = { ...currentGrid[2], cols: 3 };
        }
        this.gridSignal.set(currentGrid);
      }
    });
  }

  changeLayout() {
   this.gridSignal.set(this.grid() as Tile[]);
  }
}
