import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupNotivicationService {
  private isVisibleSubject = new BehaviorSubject<boolean>(false);
  isVisible$ = this.isVisibleSubject.asObservable();

  showNotification() {
    this.isVisibleSubject.next(true);
    setTimeout(() => {
      this.isVisibleSubject.next(false);
    }, 10000);
  }

  constructor() { }
}
