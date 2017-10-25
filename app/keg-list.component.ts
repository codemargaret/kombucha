import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li>Brand: {{currentKeg.brand}}</li>
    <li>Price: {{currentKeg.price}}.00</li>
    <li>Flavor: {{currentKeg.flavor}}</li>
  </ul>
    <ul>
      <li *ngFor="let currentKeg of childKegList"> Name: {{currentKeg.name}}</li>
    </ul>
  `
})

export class KegListComponent {


  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();




}
