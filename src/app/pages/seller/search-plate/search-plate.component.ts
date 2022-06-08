import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-plate',
  templateUrl: './search-plate.component.html',
  styleUrls: ['./search-plate.component.scss']
})
export class SearchPlateComponent implements OnInit {
  search: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
