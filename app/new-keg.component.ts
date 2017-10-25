import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div>
  <label>Enter Keg Name:</label>
  <input #newName>
  <select #newBrand>
    <option [value]="kevita"> Kevita Masterbrew Kombucha </option>
    <option [value]="unity"> Unity Vibration  </option>
    <option [value]="beyond"> Beyond Brewing Company </option>
  </select>
  <select #newPrice>
    <option [value]="4"> $4  </option>
    <option [value]="5"> $5  </option>
    <option [value]="6"> $6 </option>
  </select>
  <label>Enter Keg Flavor:</label>
  <input #newFlavor>
  <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newFlavor.value); newName.value=''; newFlavor.value='';">Add Keg</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, flavor: string) {
    let newKegToAdd: Keg = new Keg(name, brand, price, flavor);
  }
}
