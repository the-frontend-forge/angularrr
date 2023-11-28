import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})

export class NavComponent {
  clickedLinkName: string = '';

  links = [
    {
      href: '#about',
      name: 'about'
    },
    {
      href: '#portfolio',
      name: 'portfolio'
    },
    {
      href: '#contact',
      name: 'contact'
    }
  ];

  handleClick(clickedLinkName: string) {
    this.clickedLinkName = clickedLinkName;
  }
}
