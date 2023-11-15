import { Component } from '@angular/core';

@Component({
  selector: 'app-stuff',
  template: '<h1>Stuff</h1>',
  styles: ['h1 { color: green; }'],
  standalone: true, // mark the component as standalone
})
export class Stuff {
  constructor() { }

}