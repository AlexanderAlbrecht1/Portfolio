import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  currentLanguage: string = 'en';

    constructor(private translationService: TranslationService) {
      this.translationService.language$.subscribe((lang) => {
        this.currentLanguage = lang;
      });
    }
}
