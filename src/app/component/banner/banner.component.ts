import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banner: boolean;

  constructor() { }

  bannerClick() {
    this.banner = true;
  }

  ngOnInit(): void {
  }

}
