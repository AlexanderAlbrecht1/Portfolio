import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) {}

  scrollToTopIfSameRoute(targetRoute: string) {
    if (this.router.url === targetRoute) {
      // Falls bereits auf der Zielroute → nur nach oben scrollen
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Falls noch nicht auf der Zielroute → normal navigieren
      this.router.navigate([targetRoute]);
    }
  }
}
