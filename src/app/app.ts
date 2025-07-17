import { Component } from '@angular/core';
import{Child} from './child/child';
import {Child2} from './child2/child2';

@Component({
  selector: 'app-root',
  imports: [ Child, Child2 ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   newWordOfTheDay = "tiger"; //property
   secWord="world";
}
