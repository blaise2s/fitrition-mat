import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

export interface Card {
  username: string;
  name: string;
  title: string;
  desc: string;
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

  constructor() {}

  ngOnInit(): void {
    this.cards.push({
      username: 'mackenzie',
      name: 'Mackenzie Schaeffer',
      id: 2,
      title: 'Founder',
      desc: 'Short description about yourself...',
      imgUrl:
        'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/36313556_10214186408786605_1290330118429868032_n.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_ohc=I15Tx_e2BesAX-2w1qL&_nc_ht=scontent-iad3-1.xx&oh=2f29b15b1a6e86a35782b13cbdd3220e&oe=5EA1D789'
      // imgUrl:
      //   'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/90059990_10219060671200119_8718139812462198784_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=1i6XzcN0XVIAX-5H6NB&_nc_ht=scontent-iad3-1.xx&oh=4a62d870782a38a330b4d3eb6fed626b&oe=5EA00453'
    });
    this.cards.push({
      username: 'brent',
      name: 'Brent Schaeffer',
      id: 3,
      title: 'Founder',
      desc: 'Short description about yourself...',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C4D03AQHoASa5sOWmBw/profile-displayphoto-shrink_800_800/0?e=1590624000&v=beta&t=e3vESmQX__5HQFEsinvz9xqwjQELJxnnncM2gKnU-Ck'
    });
    for (let i = 0; i < 1; i++) {
      this.cards.push({
        username: 'blaise',
        name: 'Blaise Schaeffer',
        id: 1,
        title: 'Founder',
        desc: 'Short description about yourself...',
        imgUrl:
          'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/65395392_10217098605712140_7204037061777555456_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=Ipsv3HIxOhoAX8GHXZx&_nc_ht=scontent-iad3-1.xx&oh=b3613a2e351124ba247169468745c111&oe=5EA18E96'
      });
    }

    this.adjustTileWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: Event): void {
    this.adjustTileWidth();
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
