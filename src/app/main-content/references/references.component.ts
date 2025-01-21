import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleCommentComponent } from './single-comment/single-comment.component';



@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, SingleCommentComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {

}
