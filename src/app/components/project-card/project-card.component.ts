import { Component, input } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input({required:true})projUrl!:string;
  @Input({required:true})projTitle!:string;
  @Input({required:true})projDesc!:string;
  @Input({required:true})projLink!:string;
  @Input({required:true})projLinkDesc!:string;
  @Input({required:false})projLink2!:string;
  @Input({required:false})projLinkDesc2!:string;

}
