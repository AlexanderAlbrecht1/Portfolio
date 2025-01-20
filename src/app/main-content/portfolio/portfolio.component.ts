import { Component,HostListener } from '@angular/core';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectDetailsComponent,FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  hoveredProject : number = 0;
  clickedProject : number = 0;

  selectProject(project: number): void {
    this.clickedProject = project;
    console.log(this.clickedProject);

  }

  // Methode, um die ID auf null zurückzusetzen
  resetProjectId(): void {
    this.clickedProject = 0;
  }


  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY = window.scrollY;
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
  }
}

