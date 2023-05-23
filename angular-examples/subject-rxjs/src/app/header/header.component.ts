import { Component } from '@angular/core';
import { MessagingService } from '../messaging.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  template: `
    <div class="notification" *ngIf="unreadCount > 0">{{ unreadCount }}</div>
  `,
})
export class HeaderComponent {
  unreadCount = 0;
  private subscription: Subscription;

  constructor(private messagingService: MessagingService) {
    this.subscription = this.messagingService.unreadMessages$.subscribe(
      (count) => {
        this.unreadCount = count;
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
