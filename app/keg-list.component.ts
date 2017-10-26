import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="fullKegs">Full Kegs</option>
      <option value="emptyKegs" selected="selected">Empty Kegs</option>
    </select>
    <ul>
      <li [class]="priceColor(currentKeg)" *ngFor="let currentKeg of childKegList | emptiness:filterByEmptiness"> Name: {{currentKeg.name}}
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
  filterByEmptiness: string = "fullKegs";

  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByEmptiness = optionFromMenu;
}

priceColor(currentKeg){
    if (currentKeg.price === 4){
      return "bg-danger";
    } else if (currentKeg.price === 5) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
