import { Component} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-exp-card',
  standalone: true,
  imports: [],
  templateUrl: './exp-card.component.html',
  styleUrl: './exp-card.component.css'
})
export class ExpCardComponent {

   @Input({required:true})imgUrl!:string;
   @Input({required:true})title!:string;
   @Input({required:true})desc!:string;

  


}
