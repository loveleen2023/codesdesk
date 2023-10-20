import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  title = 'Service | CodesDesk'

  constructor(
    private titleServe: Title,
    private metaServe: Meta
  ) { }

  ngOnInit(): void {
    this.titleServe.setTitle(this.title);
    this.metaServe.addTag({name: 'descrption', content: 'CodesDesk - An IT Solutions Provider Company'});
    
  }

  caseConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "arrows": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": '2000', 
    "fade": true,
    "cssEase": 'linear'    
  };
  slideConfig = {
    "slidesToShow": 1,
      "dots":false,
      "arrows":false,
      "infinite": true,
      "autoplay": true,
      "loop":true,
      // "fade": true,
      "slidesToScroll": 1,
      "centerMode": false,
      "centerPadding": '100px',
      "swipe":true,
      "swipeToSlide":true,
    };


}
