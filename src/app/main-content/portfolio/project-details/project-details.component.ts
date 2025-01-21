import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  @Input() project!: number;

  @Output() resetProjectEvent = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project']) {
      console.log('Project ID updated:', this.project);
    }
  }

  onResetProject(): void {
    this.resetProjectEvent.emit();
  }

  nextProject() {
    if (this.project < 3) {
      this.project++;
    } else {
      this.project = 1;
    }
  }
}
