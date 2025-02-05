import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
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
