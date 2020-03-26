import { Component } from '@angular/core';
import { HeaderLink } from './header/header.component';

@Component({
  selector: 'fit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerLinks: HeaderLink[] = [
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];
}
