import { Component } from '@angular/core';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-message',
  template: ` <button (click)="receiveMessage()">Receive Message</button>`,
})
export class MessageComponent {
  constructor(private messagingService: MessagingService) {}

  receiveMessage(): void {
    this.messagingService.receiveMessage();
  }
}
