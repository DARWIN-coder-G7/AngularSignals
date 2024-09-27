import { InjectionToken } from '@angular/core';
import { Widget } from './bridge.interface';

export const WIDGET = new InjectionToken<Widget>('Widget');