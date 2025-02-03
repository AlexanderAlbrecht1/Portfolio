import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Component, inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslatePipe],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  // @Input() currentLangauge: string

  http = inject(HttpClient)

  contactData = {
    name : '',
    email : '',
    message : '',
    privacyPolicy: false,
  }

  placeholders = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadPlaceholders();

    // Falls sich die Sprache ändert, sollen die Platzhalter neu geladen werden
    this.translate.onLangChange.subscribe(() => {
      this.loadPlaceholders();
    });
  }

  private loadPlaceholders() {
    this.translate.get('form.placeholder.name').subscribe(text => this.placeholders.name = text);
    this.translate.get('form.placeholder.email').subscribe(text => this.placeholders.email = text);
    this.translate.get('form.placeholder.message').subscribe(text => this.placeholders.message = text);
  }

  getNamePlaceholder(name: NgModel): string {
    if (!name.valid && name.touched) {
      return this.translate.instant('form.placeholder.nameError');
    }
    return this.placeholders.name;
  }

  getMailPlaceholder(email: NgModel): string {
    if (!email.valid && email.touched) {
      return this.translate.instant('form.placeholder.emailError');
    }
    return this.placeholders.email;
  }

  getMessagePlaceholder(message: NgModel): string {
    if (!message.valid && message.touched) {
      return this.translate.instant('form.placeholder.messageError');
    }
    return this.placeholders.message;
  }

  mailTest = true;

  post = {
    endPoint: 'https://alexander-albrecht.dev/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.table(this.contactData);

      ngForm.resetForm();
    }
  }

}
