import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/** Keeps anchor targets clear of the sticky site header. */
const HEADER_SCROLL_OFFSET = 76;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }
    `,
  ],
})
export class AppComponent {
  constructor() {
    inject(ViewportScroller).setOffset([0, HEADER_SCROLL_OFFSET]);
  }
}
