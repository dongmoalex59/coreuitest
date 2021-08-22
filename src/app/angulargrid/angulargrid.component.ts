import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


@Component({
  selector: 'app-angulargrid',
  templateUrl: './angulargrid.component.html',
  styleUrls: ['./angulargrid.component.scss']
})
export class AngulargridComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;
  
  public columnDefs;
  public searchValue;
  public gridApi;
  public columnApi;
  public defaultColDef;
  public defaultColGroupDef;
  public columnTypes;
  public rowData: [];
  
  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: 'Athlete',
        field: 'athlete',
      },
      {
        headerName: 'Sport',
        field: 'sport',
      },
      {
        headerName: 'Age',
        field: 'age',
        type: 'numberColumn',
      },
      {
        headerName: 'Year',
        field: 'year',
        type: 'numberColumn',
      },
      {
        headerName: 'Date',
        field: 'date',
        type: ['dateColumn', 'nonEditableColumn'],
        width: 220,
      },
      {
        headerName: 'Medals',
        groupId: 'medalsGroup',
        children: [
          {
            headerName: 'Gold',
            field: 'gold',
            type: 'medalColumn',
          },
          {
            headerName: 'Silver',
            field: 'silver',
            type: 'medalColumn',
          },
          {
            headerName: 'Bronze',
            field: 'bronze',
            type: 'medalColumn',
          },
          {
            headerName: 'Total',
            field: 'total',
            type: 'medalColumn',
            columnGroupShow: 'closed',
          },
        ],
      },
    ];
    this.defaultColDef = {
      width: 150,
      editable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      resizable: true,
    };
    this.defaultColGroupDef = { marryChildren: true };
    this.columnTypes = {
      numberColumn: {
        width: 130,
        filter: 'agNumberColumnFilter',
      },
      medalColumn: {
        width: 100,
        columnGroupShow: 'open',
        filter: false,
      },
      nonEditableColumn: { editable: false },
      dateColumn: {
        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            var dateParts = cellValue.split('/');
            var day = Number(dateParts[0]);
            var month = Number(dateParts[1]) - 1;
            var year = Number(dateParts[2]);
            var cellDate = new Date(year, month, day);
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            } else if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            } else {
              return 0;
            }
          },
        },
      },
    };
   }

  ngOnInit(): void {
    
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
   
    const selectedData = selectedNodes.map(node => node.data);
   
    const selectedDataStringPresentation = selectedData.map(node => `${node.date} ${node.sport}`).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.http
    .get("https://www.ag-grid.com/example-assets/olympic-winners.json")
    .subscribe(data => {
      params.api.set.setRowData(data)
    })
  }

  Quicksearch() {
    this.gridApi.setQuickFilter(this.searchValue);
  }
}
