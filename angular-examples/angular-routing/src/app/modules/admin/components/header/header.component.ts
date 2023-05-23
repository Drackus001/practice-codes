import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  authService: AuthService = inject(AuthService);

  constructor(private oauthService: AuthService) {}

  onLogout(): void {
    this.oauthService.logout();
  }
}
