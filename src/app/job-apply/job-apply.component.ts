import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {

  title = 'Job-Apply | CodesDesk'

  constructor(
    private titleServe: Title,
    private metaServe: Meta
  ) { }

  ngOnInit(): void {
    this.titleServe.setTitle(this.title);
    this.metaServe.addTag({name: 'descrption', content: 'CodesDesk - An IT Solutions Provider Company'});
    
  }

}
