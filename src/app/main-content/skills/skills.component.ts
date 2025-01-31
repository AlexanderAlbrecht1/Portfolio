import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleSkillComponent } from './single-skill/single-skill.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SingleSkillComponent, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
