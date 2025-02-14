import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PopupNotivicationService } from '../../shared/services/popup-notivication.service';
import { CommonModule } from '@angular/common';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-noticication',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  templateUrl: './noticication.component.html',
  styleUrl: './noticication.component.scss'
})
export class NoticicationComponent {
  isVisible$ = this.notificationService.isVisible$;
  progress = 100;

  constructor(private notificationService: PopupNotivicationService) {
    this.isVisible$.subscribe((isVisible) => {
      if (isVisible) {
        this.startProgress();
      }
    });
  }

  startProgress() {
    this.progress = 100;
    const duration = 10000;
    const intervalTime = 100;
    const steps = duration / intervalTime;

    interval(intervalTime)
      .pipe(take(steps))
      .subscribe(() => {
        this.progress -= 100 / steps;
      });
  }

}
