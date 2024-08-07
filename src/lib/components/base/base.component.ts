import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  @Input() texto : string = '';
}
