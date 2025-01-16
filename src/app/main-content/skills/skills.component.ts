import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleSkillComponent } from './single-skill/single-skill.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SingleSkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
