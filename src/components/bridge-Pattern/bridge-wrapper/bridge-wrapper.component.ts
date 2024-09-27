import { Component, ContentChild } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Widget } from '../bridge-config/bridge.interface';
import { WIDGET } from '../bridge-config/bridge.token';

@Component({
  selector: 'app-bridge-wrapper',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './bridge-wrapper.component.html',
  styleUrl: './bridge-wrapper.component.scss'
})
export class BridgeWrapperComponent {
  @ContentChild(WIDGET as any, { static: true })
  widget!: Widget;

  ngOnInit() {
    this.widget.load();
  }

  onRefresh() {
    this.widget.refresh();
  }
}
