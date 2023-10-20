import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.css']
})
export class WebDesignComponent implements OnInit {
  title = 'Web-Design | CodesDesk'

  constructor(
    private titleServe: Title,
    private metaServe: Meta
  ) { }

  ngOnInit(): void {
    this.titleServe.setTitle(this.title);
    this.metaServe.addTag({name: 'descrption', content: 'CodesDesk - An IT Solutions Provider Company'});
    
  }
  slideConfig = {
    "slidesToShow": 4,    
    "slidesToScroll": 1,
      "dots": false,
      "arrows": false,
      "infinite": true,
      "autoplay": true,
      "autoplaySpeed": 0,
      "speed": 8000,
      "cssEase": 'linear',
      "centerMode": true,
      "swipeToSlide":false,
      "pauseOnHover":false, 
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
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
            centerPadding: '80px',
          }
        }
      ]
    };
    sliderConfig = {
      "slidesToShow": 1,
        "dots": false,
        "arrows": true,
        // "fade": true,
        "infinite": true,
        "slidesToScroll": 1,
        "centerMode": false,
        "centerPadding": '100px',
        "swipe":true,
        "swipeToSlide":true,
        "prevArrow": '<button class="slick-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>',
        "nextArrow": '<button class="slick-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>',
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
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
                slidesToShow: 1.7,
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
        slidecardConfig = {
          "slidesToShow": 1,
            "dots": false,
            "arrows": false,
            "infinite": false,
            "slidesToScroll": 1,
            "centerMode": true,
            "centerPadding": '0px',
            "swipeToSlide":true,
            "prevArrow": '<button class="slick-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>',
            "nextArrow": '<button class="slick-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>',
            responsive: [
              
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
          picsliderConfig = {
            "slidesToShow": 1,
        "dots": false,
        "arrows": false,
        "infinite": true,
        "autoplay": true,
        "fade": true,
    "autoplaySpeed": 2000,
        "slidesToScroll": 1,
        "centerMode": false,
        "centerPadding": '100px',
        "swipe":true,
        "swipeToSlide":true,
        "prevArrow": '<button class="slick-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>',
        "nextArrow": '<button class="slick-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>',
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
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
