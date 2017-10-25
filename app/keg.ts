export class Keg {
  public empty: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public flavor: string) { }
}

let kegs: Keg[] =  [
  new Keg('Rosie', 'Kevita Masterbrew Kombucha', 4, 'rose'),
  new Keg('Cloud Nine', 'Unity Vibration', 3, 'grapefruit'),
  new Keg('Desert Delight', 'Beyond Brewing Company', 5, 'moroccan mint')
];
