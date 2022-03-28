import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  // selectedCar: { name: string, source: string } = { name: '', source: '' };
  selectedCar: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
