import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cokkie-policy',
  templateUrl: './cokkie-policy.component.html',
  styleUrls: ['./cokkie-policy.component.css']
})
export class CokkiePolicyComponent {
  title = 'Cokkie Policy | CodesDesk'

  constructor(
    private titleServe: Title,
    private metaServe: Meta
  ) { }
  ngOnInit() {
    this.titleServe.setTitle(this.title);
    this.metaServe.addTag({name: 'descrption', content: 'CodesDesk - An IT Solutions Provider Company'});
    
  }
}
