import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-landscape-container',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './landscape-container.component.html',
  styleUrl: './landscape-container.component.scss'
})
export class LandscapeContainerComponent {

}
