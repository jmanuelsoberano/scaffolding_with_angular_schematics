import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.css']
})
export class <%= dasherize(name) %>Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Hello <%= name %>');
    console.log('<%= dasherize(name) %>');
    console.log('<%= classify(name) %>');
    console.log('<%= camelize(name) %>');    
  }

}
