import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Widget } from '../bridge-config/bridge.interface';
import { WIDGET } from '../bridge-config/bridge.token';

@Component({
  selector: 'app-bridge-type-two',
  standalone: true,
  imports: [MatIconModule,MatProgressSpinnerModule],
  templateUrl: './bridge-type-two.component.html',
  styleUrl: './bridge-type-two.component.scss',
  providers: [
    {
      provide: WIDGET,
      useExisting: BridgeTypeTwoComponent,
    },
  ]
})
export class BridgeTypeTwoComponent implements Widget {
  isRefreshing = false;

  load() {
    console.log('Load data from TYPE TWO API... ');
  }
  refresh() {
    console.log("TYPE TWO GET CALLED")
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }
}
