import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransitionAnimations]
})
export class AppComponent {
  title = 'Projeto';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}
