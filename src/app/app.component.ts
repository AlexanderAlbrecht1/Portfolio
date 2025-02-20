import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
  TranslateModule,
} from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import * as AOS from 'aos';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslationService } from './shared/services/translation.service';
import { MainContentComponent } from './main-content/main-content.component';
import { CustomCursorComponent } from './shared/custom-cursor/custom-cursor.component';
import { LandscapeContainerComponent } from './shared/landscape-container/landscape-container.component';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    TranslateModule,
    CustomCursorComponent,
    LandscapeContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  lastScrollTop = 0;
  hideHeader = false;
  title = 'portfolio';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (['/imprint', '/privacyPolicy', '/'].includes(event.urlAfterRedirects)) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }

  scrollToTopIfSameRoute(targetRoute: string) {
    if (this.router.url === targetRoute) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate([targetRoute]);
    }
  }


  ngOnInit(): void {
    AOS.init({
      offset: 120,
      easing: 'ease',
      once: false,
      mirror: false,
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY;
    if (currentScroll > this.lastScrollTop) {
      this.hideHeader = true;
    } else {
      this.hideHeader = false;
    }
    this.lastScrollTop = currentScroll;
  }
}
