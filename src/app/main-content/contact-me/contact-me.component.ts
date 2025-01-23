import { FormsModule, NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  contactData = {
    name : '',
    email : '',
    message : '',
    privacyPolicy: false,
  }

  onSubmit(ngFrom : NgForm) {
    if(ngFrom.valid && ngFrom.submitted) {
      console.log(this.contactData);
    }


  }

}
