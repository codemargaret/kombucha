import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `

    <ul>
      <li *ngFor="let currentKeg of childKegList"> Name: {{currentKeg.name}}
      <ul>
        <li>Brand: {{currentKeg.brand}}</li>
        <li>Price: {{currentKeg.price}}.00</li>
        <li>Flavor: {{currentKeg.flavor}}</li>
        <li>Pints Left: {{currentKeg.pints}}</li>
        <button class="btn btn-info" (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
        <button class="btn btn-info" (click)="currentKeg.sellPint()" (click)="currentKeg.isEmpty()">Pour!</button>

      </ul>
      </li>
    </ul>
  `
})

export class KegListComponent {


  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();


  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

}
