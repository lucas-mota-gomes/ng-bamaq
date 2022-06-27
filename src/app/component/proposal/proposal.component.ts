import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  logged: boolean;
  sent: boolean;
  i2;
  i3;
  parcelas: number;
  constructor() { }

  ngOnInit(): void {
  }

}
