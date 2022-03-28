import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  // @Input() car: { name: string, source: string } = { name: '', source: '' }
  @Input() car: string = ''
  ngOnInit(): void {
  }
}
