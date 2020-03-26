import { Component, Input, OnInit } from '@angular/core';

export interface HeaderLink {
  title: string;
  path: string;
}

export type LinkFill = 'left' | 'right' | 'center' | 'ends';

@Component({
  selector: 'fit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routerLinkActiveOptions = {
    exact: true
  };

  @Input() links: HeaderLink[];

  linkStyle: string = 'fit--header--link fit--header--link--fill-center';
  @Input() set linkFill(fill: LinkFill) {
    this.linkStyle = `fit--header--link fit--header--link--fill-${fill}`;
  }

  constructor() {}

  ngOnInit(): void {}
}
