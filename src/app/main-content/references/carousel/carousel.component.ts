import { CommonModule } from '@angular/common';
import { AfterViewInit,Component,ElementRef,HostListener, Input, ViewChild } from '@angular/core';

interface Feedback {
  id: number;
  name: string;
  role: string;
  comment: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  @Input() feedbackList: Feedback[] = [];
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  currentIndex = 0;
  private touchStartX = 0;
  private touchEndX = 0;

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.feedbackList.length;
  }

  previous(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.feedbackList.length) % this.feedbackList.length;
  }

  goToIndex(index: number): void {
    this.currentIndex = index;
  }

  getVisibleFeedback() {
    const prevIndex = (this.currentIndex - 1 + this.feedbackList.length) % this.feedbackList.length;
    const nextIndex = (this.currentIndex + 1) % this.feedbackList.length;

    return [
      this.feedbackList[prevIndex],
      this.feedbackList[this.currentIndex],
      this.feedbackList[nextIndex]
    ];
  }

  ngAfterViewInit(): void {
    if ('ontouchstart' in window) {
      this.carousel.nativeElement.addEventListener('touchstart', (event: TouchEvent) => this.onTouchStart(event));
      this.carousel.nativeElement.addEventListener('touchend', (event: TouchEvent) => this.onTouchEnd(event));
    }
  }

  private onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  private onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    const swipeThreshold = 50; // Mindestdistanz für ein Swipe
    const swipeDistance = this.touchStartX - this.touchEndX;

    if (swipeDistance > swipeThreshold) {
      this.next();
    } else if (swipeDistance < -swipeThreshold) {
      this.previous();
    }
  }

}
