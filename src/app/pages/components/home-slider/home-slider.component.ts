import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { FreeMode, Virtual } from 'swiper';
import { Slide, sliderData } from 'src/app/shared/slider.data';

SwiperCore.use([FreeMode, Virtual]);

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent | any;
  sliderData: Slide[] = sliderData;
  constructor() {}

  ngOnInit(): void {}

  slideNext() {
    this.swiper.swiperRef.slideNext(1000);
  }

  slidePrev() {
    this.swiper.swiperRef.slidePrev(1000);
  }
}
