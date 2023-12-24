import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent {
  projects = [
    {
      name: 'SoFi',
      logo: './assets/images/logo-sofi.svg'
    },
    {
      name: 'Rain',
      logo: './assets/images/logo-rain.png'
    },
    {
      name: 'Arby\'s',
      logo: './assets/images/logo-arbys.png'
    }
  ];
}
