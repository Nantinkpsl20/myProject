import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css'
})
export class Child2 {
  @Input() forSecWord =" ";
}
