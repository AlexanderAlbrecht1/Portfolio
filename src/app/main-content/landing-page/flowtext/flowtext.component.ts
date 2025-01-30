import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-flowtext',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './flowtext.component.html',
  styleUrl: './flowtext.component.scss'
})
export class FlowtextComponent {

}
