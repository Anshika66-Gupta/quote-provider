import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      alert('Access denied!');
      return false;
    }
    return true;
  }
}
