import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  currentLanguage: string;

  isChecked = false;

  constructor(private translationService: TranslationService) {
    this.currentLanguage = this.translationService.currentLanguage;
  }

  toggleLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translationService.switchLanguage(newLang);
    this.currentLanguage = newLang;
    console.log(this.currentLanguage);

  }

}
