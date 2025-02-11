import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Component, inject, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslatePipe],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false,
  };

  placeholders = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private translate: TranslateService, private http: HttpClient) {}

  ngOnInit() {
    this.loadPlaceholders();
    this.translate.onLangChange.subscribe(() => {
      this.loadPlaceholders();
    });
  }

  private loadPlaceholders() {
    this.translate
      .get('form.placeholder.name')
      .subscribe((text) => (this.placeholders.name = text));
    this.translate
      .get('form.placeholder.email')
      .subscribe((text) => (this.placeholders.email = text));
    this.translate
      .get('form.placeholder.message')
      .subscribe((text) => (this.placeholders.message = text));
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

  mailTest = false;
  apiUrl = 'https://alexander-albrecht.dev/api/sendMail.php';

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post<{ success: boolean; message?: string; error?: string }>(
          this.apiUrl,
          this.contactData,
          {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: 'json',
          }
        )
        .subscribe({
          next: (response) => {
            if (response.success) {
              console.log('✅ Mail erfolgreich gesendet:', response.message);
            } else {
              console.error('⚠️ Fehler beim Senden:', response.error);
            }
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('❌ Fehler bei der Anfrage:', error.error?.error || 'Unbekannter Fehler');
          },
          complete: () => console.info('📨 Mail-Versand abgeschlossen'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.table(this.contactData);
      ngForm.resetForm();
    }
  }



  sendTestMail() {
    this.http.post('https://alexander-albrecht.dev/api/testMail.php', {})
      .subscribe({
        next: (response) => console.log('Mail erfolgreich gesendet:', response),
        error: (error) => console.error('Fehler beim Senden der Mail:', error)
      });
  }

}
