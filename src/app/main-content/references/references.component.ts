import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';

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
        'Your way of working is characterized by efficiency, accuracy and a focus on clean, modular solutions. You analyze problems thoroughly and implement projects in a structured way, with a clear eye for detail and user-friendliness. Your commitment to familiarizing yourself with new technologies and finding creative solutions is particularly impressive.',
    },
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  private loadTranslations() {
    this.feedbackList.forEach((feedback, index) => {
      this.translate
        .get(`feedback.quote${feedback.id}`)
        .subscribe((translatedText: string) => {
          this.feedbackList[index].comment = translatedText;
        });
    });
  }
}
