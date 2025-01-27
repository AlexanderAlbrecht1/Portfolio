import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

interface Feedback {
  id: number;
  name: string;
  role: string;
  comment: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {

  feedbackList: Feedback[] = [
    {
      id: 1,
      name: 'Florian Z.',
      role: 'Team Partner',
      comment:
        'You have a friendly and calm demeanor, which makes you easy to work with in a team. Your structured way of working and your clean and understandable code mean that you manage to meet deadlines.',
    },
    {
      id: 2,
      name: 'Jörg D.',
      role: 'Team Partner',
      comment:
        'A very active partner in the team who convinces with constructive ideas. His implementation was quick and reliable. If you have Alexander on your team, you can be sure that the project will not only succeed, but will also be good.I really enjoyed working with him and would be happy to work in a team with him again at any time.',
    },
    {
      id: 3,
      name: 'Firat T.',
      role: 'Team Partner',
      comment:
        'Lorem ipsum',
    }
  ];


  // currentIndex = 0;

  // next(): void {
  //   this.currentIndex = (this.currentIndex + 1) % this.feedbackList.length;
  // }

  // previous(): void {
  //   this.currentIndex =
  //     (this.currentIndex - 1 + this.feedbackList.length) % this.feedbackList.length;
  // }

  // goToIndex(index: number): void {
  //   this.currentIndex = index;
  // }

  // getVisibleFeedback() {
  //   const prevIndex = (this.currentIndex - 1 + this.feedbackList.length) % this.feedbackList.length;
  //   const nextIndex = (this.currentIndex + 1) % this.feedbackList.length;

  //   return [
  //     this.feedbackList[prevIndex],
  //     this.feedbackList[this.currentIndex],
  //     this.feedbackList[nextIndex]
  //   ];
  // }

}
