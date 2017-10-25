import { Component } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Kombucha on Tap</h1>
      <h3 *ngFor="let currentKeg of kegs">Name: {{currentKeg.name}}

      <ul>
        <li>Brand: {{currentKeg.brand}}</li>
        <li>Price: {{currentKeg.price}}.00</li>
        <li>Flavor: {{currentKeg.flavor}}</li>
      </ul>
      </h3>
  </div>
    `
  })

export class AppComponent {

}
