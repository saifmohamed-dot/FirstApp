import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider{
  private imgUrls : Array<string> = ["tom.jpg" , "tom2.PNG" , "spike.PNG"];
  private imgIdx : number = 0;
  currentImg() : string {
    return this.imgUrls[this.imgIdx];
  }
  currentImgIdx() : number {
    return this.imgIdx;
  }
  moveRight() {
    this.imgIdx = (this.imgIdx + 1) % this.imgUrls.length;
  }
  moveLeft() {
    this.imgIdx--;
    this.imgIdx = (this.imgIdx == -1) ? this.imgUrls.length - 1 : this.imgIdx;
  }
  onDotClick(e : Event) {
    const img = e.target as HTMLElement;
    this.imgIdx = Number(img.getAttribute('id'));
  }
  onStartTicking() {
    setInterval(() => {
      this.moveRight();
    } , 3000)
  }
}
