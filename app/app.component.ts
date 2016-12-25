import { Hero } from './hero';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
        <h2>My favorite hero is: {{myHero}}</h2>
        <p *ngIf="heroes.length > 3">There are many heroes</p>
        <p>Heroes:</p>
        <ul>
          <li *ngFor="let hero of heroes">
            {{hero.name}}
          </li>
        </ul>
  `,
})
export class AppComponent {
  title = "Tour of heroes";
  heroes = [
    new Hero(1, "windstorm"),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Magneta'),
    new Hero(4, "tornado")
  ];
  myHero = this.heroes[0].name;
}
