import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MytripsComponent implements OnInit {
  public tables = [];

  constructor() { }

  ngOnInit() {


    this.tables = [
      {Loadid:'54321', pickuplocation: '30736 WIEGMAN RD	Hayward	CA	USA', destination: '660 WEST FIELD RD.	South San Francisco	CA	USA',equipmenttype: 'VAN', commoditytype:'Electronic devices',estimatedmiles: '520'},
      {Loadid:'54322', pickuplocation: '30736 WIEGMAN RD	Hayward	CA	USA', destination: '30736 WIEGMAN RD	Hayward	CA	USA',equipmenttype: 'VAN', commoditytype:'Electronic devices',estimatedmiles: '520'},
      {Loadid:'54323', pickuplocation: '1624 ARMY CT	Stockton	CA	USA', destination: '660 WEST FIELD RD.	South San Francisco	CA	USA',equipmenttype: 'VAN', commoditytype:'Electronic devices',estimatedmiles: '520'},
      {Loadid:'54325', pickuplocation: '30736 WIEGMAN RD	Hayward	CA	USA', destination: '660 WEST FIELD RD.	South San Francisco	CA	USA',equipmenttype: 'VAN', commoditytype:'Electronic devices',estimatedmiles: '520'},
      {Loadid:'54326', pickuplocation: '660 WEST FIELD RD.	South San Francisco	CA	USA', destination: '30736 WIEGMAN RD	Hayward	CA	USA',equipmenttype: 'VAN', commoditytype:'Electronic devices',estimatedmiles: '520'},
    ]



  }

}

