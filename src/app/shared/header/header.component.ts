import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLanguage: string;

  isChecked = false;

  isVisible: boolean = false;

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  constructor(private translationService: TranslationService) {
    this.currentLanguage = this.translationService.currentLanguage;
    this.isChecked = this.currentLanguage === 'de';
  }

  toggleLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translationService.switchLanguage(newLang);
    this.currentLanguage = newLang;
    this.isChecked = newLang === 'de';
  }

  toggleLanguageMobile(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.isChecked = inputElement.checked;
    const newLang = this.isChecked ? 'de' : 'en';
    this.translationService.switchLanguage(newLang);
    this.currentLanguage = newLang;
  }

  stopEvent(event: Event): void {
    event.stopPropagation();
  }
}
