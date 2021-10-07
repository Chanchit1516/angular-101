import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  currentUser!: User;
  route: string = '';
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
    this.route = this.router.url;
    router.events.subscribe((val) => {
      this.route = this.router.url;
    });
  }

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  switchActive() {
    this.route = this.router.url;
  }
}
