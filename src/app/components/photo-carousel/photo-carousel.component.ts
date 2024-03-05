import { Component, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import { promises } from 'dns';


@Component({
  selector: 'app-photo-carousel',
  standalone: true,
  imports: [],
  templateUrl: './photo-carousel.component.html',
  styleUrl: './photo-carousel.component.css'
})
export class PhotoCarouselComponent {

  carouselInner = this.el.nativeElement.querySelector('#aboutImgsImgs');
  totalItems = this.el.nativeElement.querySelectorAll('.coverPhoto').length;
  index = 0;

  constructor( private el: ElementRef){
  }

    cycleImg(i: Number){
      const photoWidth = this.el.nativeElement.querySelector('.coverPhoto').width;
      const newWidth = -i * photoWidth +'px';

        this.carouselInner.style.transform = 'translateX('+newWidth+')';
    }


    cycleImgNext(){
      console.log("cycleWorks")
      this.cycleImg(this.index)
      if(this.index < this.totalItems - 1 ){
        this.index ++;
      }else{this.index = 0}
    }

    async ngAfterViewInit():Promise<void>{
      let xTimes = 90;
      for(let i = 0; i <= xTimes;i++ ){
        this.cycleImgNext()
        await this.delay(3000)
      }  
    }

    delay(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
}
