import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// const slideDuplicate = document.querySelector('.logo-slider ul')?.cloneNode(true);
// document.querySelector('.logo-slider')?.appendChild(slideDuplicate);

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent {}
