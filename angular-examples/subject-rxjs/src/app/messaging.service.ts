import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  private unreadMessagesSubject: Subject<number> = new Subject<number>();
  public unreadMessages$ = this.unreadMessagesSubject.asObservable();

  private unreadCount = 0;

  receiveMessage(): void {
    this.unreadCount++;
    this.unreadMessagesSubject.next(this.unreadCount);
  }

  markAsRead(): void {
    this.unreadCount = 0;
    this.unreadMessagesSubject.next(this.unreadCount);
  }
}
