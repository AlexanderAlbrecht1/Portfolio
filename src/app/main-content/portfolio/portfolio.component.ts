import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  hoveredProject : number = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY = window.scrollY;
    console.log(`Aktuelle Y-Koordinate: ${scrollY}px`);
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
  }
}

