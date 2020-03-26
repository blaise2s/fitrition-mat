import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RouteParams } from '../app-routing.module';

@Component({
  selector: 'fit-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const key: RouteParams = 'username';
      this.username = params[key];
    });
  }

  ngOnInit(): void {}
}
