import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PrivacyPolicyComponent } from "../privacy-policy/privacy-policy.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactMeComponent, PrivacyPolicyComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
