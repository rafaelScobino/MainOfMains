import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css',
})
export class ProjectCarouselComponent {

}
