import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Kombucha on Tap</h1>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
    `
  })

export class AppComponent {
  masterKegList: Keg[] =  [
    new Keg('Rosie', 'Kevita Masterbrew Kombucha', 4, 'rose'),
    new Keg('Cloud Nine', 'Unity Vibration', 3, 'grapefruit'),
    new Keg('Desert Delight', 'Beyond Brewing Company', 5, 'moroccan mint')
  ];

  selectedKeg = null;

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
