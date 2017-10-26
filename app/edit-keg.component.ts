import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
      <div *ngIf="childSelectedKeg">
        <h3>{{childSelectedKeg.name}}</h3>

        <hr>
        <h3>Edit Keg</h3>
        <label>Enter Keg Name:</label>
        <input [(ngModel)]="childSelectedKeg.name">
        <label>Enter Keg Brand:</label><br>
          <input type="radio" [(ngModel)]="childSelectedKeg.brand" [value]="kevita">Kevita Masterbrew Kombucha <br>
          <input type="radio" [(ngModel)]="childSelectedKeg.brand" [value]="unity">Unity Vibration <br>
          <input type="radio" [(ngModel)]="childSelectedKeg.brand" [value]="beyond"> Beyond Brewing Company <br>
        <label>Enter Keg Price:</label><br>
          <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="4"> 4 <br>
          <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="5"> 5 <br>
          <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="6"> 6 <br>
        <label>Enter Keg Flavor:</label>
        <input [(ngModel)]="childSelectedKeg.flavor">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
