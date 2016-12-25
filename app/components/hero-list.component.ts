// @Component({  //decoreator. identifies the class immediatly is component
//   moduleId: module.id,
//   selector: 'hero-list',  //Css selector that talks Angular to create and insert into it the components instance
//   templateUrl: `hero-list.component.html`,  //module-relative address of this components html 
//   providers: [HeroService]  //array of dependency injection providers
// })

// export class HeroListComponent implements OnInit {
//   heroes: Hero[];
//   selectedHero: Hero;

//   constructor(private service: HeroService) { }

//   ngOnInit() {
//     this.heroes = this.service.getHeroes;
//   }

//   selectHero(hero: Hero) {
//     this.selectedHero = hero;
//   }
// }
