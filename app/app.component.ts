import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Kombucha on Tap</h1>
  </div>
    `
  })

export class AppComponent {
  kegs: Keg[] =  [
    new Keg('Rosie', 'Kevita Masterbrew Kombucha', 4, 'rose'),
    new Keg('Cloud Nine', 'Unity Vibration', 3, 'grapefruit'),
    new Keg('Desert Delight', 'Beyond Brewing Company', 5, 'moroccan mint')
  ];

}

export class Keg {
  public empty: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public flavor: string) { }
}
