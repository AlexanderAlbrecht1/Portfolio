import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss'
})
export class CustomCursorComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  showCursor = true;

  ngOnInit() {
    this.showCursor = !this.isTouchDevice();
  }

  isTouchDevice(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const cursor = this.el.nativeElement.querySelector('.custom-cursor');
    if (cursor) {
      this.renderer.setStyle(cursor, 'left', `${event.clientX}px`);
      this.renderer.setStyle(cursor, 'top', `${event.clientY}px`);
    }
  }
}
