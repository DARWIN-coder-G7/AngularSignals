import { Component } from '@angular/core';
import { Widget } from '../bridge-config/bridge.interface';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { WIDGET } from '../bridge-config/bridge.token';

@Component({
  selector: 'app-bridge-type-one',
  standalone: true,
  imports: [MatProgressBarModule,MatIconModule],
  templateUrl: './bridge-type-one.component.html',
  styleUrl: './bridge-type-one.component.scss',
  providers: [
    {
      provide: WIDGET,
      useExisting: BridgeTypeOneComponent,
    },
  ]
})
export class BridgeTypeOneComponent  implements Widget{
  isLoading = false;
  load() {
    console.log('Load data from TYPE ONE API... ');
  }
  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
