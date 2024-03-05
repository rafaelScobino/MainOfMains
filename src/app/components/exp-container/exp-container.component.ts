import { Component } from '@angular/core';
import { ExpCardComponent } from '../exp-card/exp-card.component';

@Component({
  selector: 'app-exp-container',
  standalone: true,
  imports: [ExpCardComponent],
  templateUrl: './exp-container.component.html',
  styleUrl: './exp-container.component.css'
})
export class ExpContainerComponent {

}
