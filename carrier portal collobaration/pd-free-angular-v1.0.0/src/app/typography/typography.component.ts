import { style } from '@angular/animations';
import { Component } from '@angular/core';
declare var google: any;

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html',
   // styleUrls: ['./typography.component']
})

export class TypographyComponent {
public table=[];


tables = [
    {Loadid:'54321', pickuplocation: '30736 WIEGMAN RD,Hayward,CA,USA', destination: '660 WEST FIELD RD,South San Francisco,CA,USA',equipmenttype: 'VAN', commoditytype:'Electronic devices',estimatedmiles: '520'},
    {Loadid:'54322', pickuplocation: '30736 WIEGMAN RD	Hayward	CA	USA', destination: '30736 WIEGMAN RD	Hayward	CA	USA',equipmenttype: 'VAN', commoditytype:'Electronic devices',estimatedmiles: '520'},
    {Loadid:'54333', pickuplocation: '1624 ARMY CT	Stockton	CA	USA', destination: '660 WEST FIELD RD.	South San Francisco	CA	USA',equipmenttype: 'VAN', commoditytype:'Electronic devices',estimatedmiles: '520'},
    {Loadid:'54335', pickuplocation: '30736 WIEGMAN RD	Hayward	CA	USA', destination: '660 WEST FIELD RD.	South San Francisco	CA	USA',equipmenttype: 'VAN', commoditytype:'Electronic devices',estimatedmiles: '520'},
    {Loadid:'54336', pickuplocation: '660 WEST FIELD RD.	South San Francisco	CA	USA', destination: '30736 WIEGMAN RD	Hayward	CA	USA',equipmenttype: 'VAN', commoditytype:'Electronic devices',estimatedmiles: '520'},
  ]






}




