import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rowData: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
     this.http.get('http://jsonplaceholder.typicode.com/posts ').subscribe(data => {
      this.rowData=data;
    });;
}
  columnDefs = [
      {headerName: 'User Id', field: 'userId',sortable: true,},
      {headerName: 'ID', field: 'id',sortable: true, },
      {headerName: 'Title', field: 'title',sortable: true,},
      {Body: 'Title', field: 'body',sortable: true,}
  ];

  
}
