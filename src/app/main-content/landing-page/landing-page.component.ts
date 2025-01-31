import { Component } from '@angular/core';
import { FlowtextComponent } from './flowtext/flowtext.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FlowtextComponent,TranslatePipe],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
