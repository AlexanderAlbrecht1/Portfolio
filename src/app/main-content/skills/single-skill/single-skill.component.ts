import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skills {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-single-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss'
})
export class SingleSkillComponent {
  skillList : Skills[] = [ {
    name : 'HTML',
    icon : 'html.svg'
  },
  {
    name : 'CSS',
    icon : 'css.svg'
  },
  {
    name : 'JavaScript',
    icon : 'javascript.svg'
  },
  {
    name : 'Material Design',
    icon : 'material-design.svg'
  },
  {
    name : 'TypeScript',
    icon : 'typescript.svg'
  },  {
    name : 'Angular',
    icon : 'angular.svg'
  },  {
    name : 'Firebase',
    icon : 'firebase.svg'
  },  {
    name : 'GIT',
    icon : 'git.svg'
  },  {
    name : 'REST-Api',
    icon : 'rest_api.svg'
  },  {
    name : 'Scrum',
    icon : 'scrum.svg'
  }
]
}
