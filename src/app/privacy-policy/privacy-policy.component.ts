import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  currentLanguage: string = 'en';

  constructor(private translationService: TranslationService) {
    this.translationService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }
}
