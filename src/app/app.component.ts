import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControllercustomComponent } from '../components/form-controllercustom/form-controllercustom.component';
import { BootstrapStylingComponent } from "../components/bootstrap-styling/bootstrap-styling.component";
import { BridgePatternParentComponent } from "../components/bridge-Pattern/bridge-pattern-parent/bridge-pattern-parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormControllercustomComponent, BootstrapStylingComponent, BridgePatternParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularlatest';
}
