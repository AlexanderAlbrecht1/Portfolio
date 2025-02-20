import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';



export const routes: Routes = [
  {path: '', component: MainContentComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacyPolicy', component: PrivacyPolicyComponent},
];
