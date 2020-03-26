import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fit-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      this.username;
    });
  }

  ngOnInit(): void {}
}
