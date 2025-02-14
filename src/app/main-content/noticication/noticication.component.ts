import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-noticication',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './noticication.component.html',
  styleUrl: './noticication.component.scss'
})
export class NoticicationComponent {

}
