import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PhotoCarouselComponent } from './components/photo-carousel/photo-carousel.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExpContainerComponent } from './components/exp-container/exp-container.component';
import { ProjectCarouselComponent } from './components/project-carousel/project-carousel.component';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, PhotoCarouselComponent, AboutMeComponent, ExpContainerComponent, NotImplementedComponent, ProjectCarouselComponent,ContactInfoComponent]
})
export class AppComponent {
  title = 'my-app';
}
