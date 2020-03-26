import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'fit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  checked = true;
  animate = true;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    if (this.mode === 'indeterminate') {
      this.mode = 'determinate';
    } else {
      this.mode = 'indeterminate';
    }
    // this.animate = !this.animate;
  }
}
