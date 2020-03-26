import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Card {
  username: string;
  first: string;
  last: string;
  title: string;
  bio: string;
  id: number;
  imgUrl?: string;
}

@Component({
  selector: 'fit-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  cols = 12;
  rowHeight = '10rem';
  gutterSize = '0.5rem';
  tileWidth = 3;
  tileHeight = 4;
  cards: Card[] = [];
  users: Card[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://fitrition-fb.firebaseio.com/users.json', {
        params: { auth: 'e2spXGVClZQb7oBXNxgQ4DmjjdsyYnqo2yY7gEvq' }
      })
      .subscribe((response: { [key: string]: Card }[]) => {
        const keys = Object.keys(response);
        keys.forEach((k) => {
          this.users.push(response[k]);
        });
        this.users.sort(this.sotrUsers);
      });

    this.adjustTileWidth();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.adjustTileWidth();
  }

  private sotrUsers(user1: Card, user2: Card): number {
    const n1 = `${user1.first} ${user1.last}`;
    const n2 = `${user2.first} ${user2.last}`;

    if (n1 > n2) {
      return 1;
    } else if (n1 < n2) {
      return -1;
    }

    return 0;
  }

  private adjustTileWidth(): void {
    const innerWidth = window.innerWidth;

    if (innerWidth > 1280) {
      this.tileWidth = 3;
      return;
    }

    if (innerWidth <= 1280 && innerWidth > 900) {
      this.tileWidth = 4;
    } else if (innerWidth <= 900 && innerWidth > 520) {
      this.tileWidth = 6;
    } else if (innerWidth <= 520) {
      this.tileWidth = 12;
    }
  }
}
