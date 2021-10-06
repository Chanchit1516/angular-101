import { Component } from '@angular/core';

import { UserService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  loading = false;
  users: any = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }
}
