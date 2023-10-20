import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  title = 'About us | CodesDesk'
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { 

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTag({name: 'descrption', content: 'Codesdesk is Growing E-Commerce Agency based in India serving global clients since 7+ years.'});
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
  slidelastConfig = {
    "slidesToShow": 3.01,
      "dots": true,
      "arrows": true,
      "infinite": true,
      "slidesToScroll": 1,
      "centerMode": false,
      "centerPadding": '100px',
      "swipe":true,
      "swipeToSlide":false,
      "prevArrow": '<button class="slick-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>',
      "nextArrow": '<button class="slick-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: '80px',
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '40px',
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '50px',
          }
        }
      ]
    };
}
