import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

// components - different sections for homepage. Can use routes when content gets too big.
import { AboutSectionComponent } from './about-section/about-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@Component({
  standalone: true,
  imports: [
    AboutSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    PortfolioSectionComponent,
    RouterModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'the-frontend-forge';
}
