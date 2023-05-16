import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 template: `
  <nav>
    <a routerLink="/dogs" routerLinkActive="active">Dogs</a>
    <a routerLink="/cats" routerLinkActive="active">Cats</a>
    <a routerLink="/birds" routerLinkActive="active">Birds</a>
  </nav>

   <main>
     <router-outlet></router-outlet>
   </main>
 `,
})
export class AppComponent {}
