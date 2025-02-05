import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  currentLanguage!: string;
    private langSubscription: Subscription;

    constructor(private translationService: TranslationService) {
      this.langSubscription = this.translationService.language$.subscribe((lang) => {
        this.currentLanguage = lang;
      });
    }

    ngOnInit() {
      this.currentLanguage = this.translationService.currentLanguage;
    }

    ngOnDestroy() {
      this.langSubscription.unsubscribe();
    }
}
