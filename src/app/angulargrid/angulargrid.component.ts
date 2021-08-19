import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-angulargrid',
  templateUrl: './angulargrid.component.html',
  styleUrls: ['./angulargrid.component.scss']
})
export class AngulargridComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefs = [
    { field: 'make', sortable: true, filter: true, checkboxSelection: true},
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true },
    { field: 'country', sortable: true, filter: true },
    { field: 'age', sortable: true, filter: true },
    { field: 'color', sortable: true, filter: true },
    { field: 'hour', sortable: true, filter: true },
    { field: 'engine', sortable: true, filter: true },
    { field: 'driver', sortable: true, filter: true }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Ford', model: 'Mondeo', price: 32000 , country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Porsche', model: 'Boxter', price: 72000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Toyota', model: 'Celica', price: 35000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Ford', model: 'Mondeo', price: 32000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Porsche', model: 'Boxter', price: 72000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Toyota', model: 'Celica', price: 35000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Ford', model: 'Mondeo', price: 32000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Porsche', model: 'Boxter', price: 72000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Toyota', model: 'Celica', price: 35000, country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Ford', model: 'Mondeo', price: 32000 , country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Porsche', model: 'Boxter', price: 72000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Toyota', model: 'Celica', price: 35000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Ford', model: 'Mondeo', price: 32000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Porsche', model: 'Boxter', price: 72000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Toyota', model: 'Celica', price: 35000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Ford', model: 'Mondeo', price: 32000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Porsche', model: 'Boxter', price: 72000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Toyota', model: 'Celica', price: 35000, country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Ford', model: 'Mondeo', price: 32000 , country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Porsche', model: 'Boxter', price: 72000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Toyota', model: 'Celica', price: 35000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Ford', model: 'Mondeo', price: 32000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Porsche', model: 'Boxter', price: 72000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Toyota', model: 'Celica', price: 35000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Ford', model: 'Mondeo', price: 32000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' },
    { make: 'Porsche', model: 'Boxter', price: 72000,  country: 'cameroun', age: '23', color: 'red', hour: '3', engine: 'diesel', driver: 'alex' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
