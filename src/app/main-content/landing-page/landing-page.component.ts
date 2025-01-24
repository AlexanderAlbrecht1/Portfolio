import { Component } from '@angular/core';
import { FlowtextComponent } from './flowtext/flowtext.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FlowtextComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
