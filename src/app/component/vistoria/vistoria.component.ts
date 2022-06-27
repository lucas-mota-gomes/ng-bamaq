import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vistoria',
  templateUrl: './vistoria.component.html',
  styleUrls: ['./vistoria.component.scss']
})
export class VistoriaComponent implements OnInit {

  constructor() { }

  dropdown = [];

  ngOnInit(): void {
  }

  public toggleDropDown(drop: any) {
    if (this.dropdown[drop]) {
      this.dropdown[drop] = false;
    }
    else {
      this.dropdown[drop] = true;
    }
  }

}
