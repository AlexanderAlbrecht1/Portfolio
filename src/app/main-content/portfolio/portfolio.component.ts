import { Component,HostListener } from '@angular/core';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FormsModule } from '@angular/forms';
import { ScrollService } from '../../scroll.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectDetailsComponent,FormsModule, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

constructor(private scrollService: ScrollService) {}

  hoveredProject : number = 0;
  clickedProject : number = 0;

  selectProject(project: number): void {
    this.clickedProject = project;
    console.log(this.clickedProject);
    this.scrollService.disableScroll();
  }

  resetProjectId(): void {
    this.clickedProject = 0;
    this.scrollService.enableScroll();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY = window.scrollY;
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
  }
}

