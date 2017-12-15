import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'Load ID', 'Pickup Location', 'Destination', 'Equipment', 'Commodity', 'Miles', 'Request'],
            dataRows: [
                ['54321', '30736 WIEGMAN RD	Hayward	CA	USA', '660 WEST FIELD RD,South San Francisco,CA,USA', 'VAN', 'Electronic devices', '520'  ],
                ['54323', '30736 WIEGMAN RD	Hayward	CA', '30736 WIEGMAN RD	Hayward	CA	USA', 'VAN', 'Electronic devices', '520'],
                ['54324', '30736 WIEGMAN RD	Hayward	CA	USA', '1 MARKET ST.	Oakland	CA	USA', 'VAN', 'Electronic devices', '520'],
                ['54325', '30736 WIEGMAN RD	Hayward	CA', '30736 WIEGMAN RD	Hayward	CA	USA', 'VAN', 'Electronic devices', '520'],
                ['54326', '1 MARKET ST.	Oakland	CA	USA', '1 MARKET ST.	Oakland	USA', 'VAN', 'Electronic devices', '520'],
               [ '54327', '30736 WIEGMAN RD	Hayward	CA	USA', '1 MARKET ST.	Oakland	CA	USA', 'VAN', 'Electronic devices', '520'],
               ['54328', '1 MARKET ST.	Oakland	CA	USA', '30736 WIEGMAN RD	Hayward	CA	USA', 'VAN', 'Electronic devices', '520'],
               ['54329', '30736 WIEGMAN RD	Hayward	CA	USA', '1 MARKET ST.	Oakland	CA	USA', 'VAN', 'Electronic devices', '520'],
              [ '54330', '1 MARKET ST.	Oakland	CA	USA', '30736 WIEGMAN RD	Hayward	CA	USA', 'VAN', 'Electronic devices', '520'],
            ]
        };
        this.tableData2 = {
            headerRow: [ 'Load ID', 'Pickup Location', 'Destination', 'Equipment type ', 'Commodity', 'Miles'],
            dataRows: [
                ['54321', '30736 WIEGMAN RD	Hayward	CA	USA', '660 WEST FIELD RD,South San Francisco,CA,USA', 'VAN', 'Electronic devices', '520'  ],
                ['54323', '30736 WIEGMAN RD	Hayward	CA', '30736 WIEGMAN RD	Hayward	CA	USA', 'VAN', 'Electronic devices', '520'],
                ['54324', '30736 WIEGMAN RD	Hayward	CA	USA', '1 MARKET ST.	Oakland	CA	USA', 'VAN', 'Electronic devices', '520'],
                ['54325', '30736 WIEGMAN RD	Hayward	CA', '30736 WIEGMAN RD	Hayward	CA	USA', 'VAN', 'Electronic devices', '520'],
                ['54326', '1 MARKET ST.	Oakland	CA	USA', '1 MARKET ST.	Oakland	USA', 'VAN', 'Electronic devices', '520'],
               [ '54327', '30736 WIEGMAN RD	Hayward	CA	USA', '1 MARKET ST.	Oakland	CA	USA', 'VAN', 'Electronic devices', '520'],
               ['54328', '1 MARKET ST.	Oakland	CA	USA', '30736 WIEGMAN RD	Hayward	CA	USA', 'VAN', 'Electronic devices', '520'],
               ['54329', '30736 WIEGMAN RD	Hayward	CA	USA', '1 MARKET ST.	Oakland	CA	USA', 'VAN', 'Electronic devices', '520'],
              [ '54330', '1 MARKET ST.	Oakland	CA	USA', '30736 WIEGMAN RD	Hayward	CA	USA', 'VAN', 'Electronic devices', '520'],
            ]
        };
    }
}
