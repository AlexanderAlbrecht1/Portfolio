import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Component, inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

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

  getNamePlaceholder(name : NgModel): string {
    if (!name.valid && name.touched) {
      return 'Oops! You forgot your name!';
    }
    return "What's your name?";
  }

  getMailPlaceholder(name : NgModel): string {
    if (!name.valid && name.touched) {
      return 'Hoppla! I need your email to answer you!';
    }
    return "youremail@mail.com";
  }

  getMessagePlaceholder(name : NgModel): string {
    if (!name.valid && name.touched) {
        return 'What do you want to know?';
    }
    return "Hey Alex, I am interessted in ...";
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
