import { Component, OnInit , ViewChild } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import {DionaeaService} from '../core/dionaea-service.service';
import { IConnections } from "../Model/DionaeaModel";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {DataSource} from '@angular/cdk/collections';

import { MatSort, MatTableModule , MatSortable , MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dionaea-sensor',
  templateUrl: './dionaea-sensor.component.html',
  styleUrls: ['./dionaea-sensor.component.css']
})
export class DionaeaSensorComponent implements OnInit {
  displayedColumns = ['connection', 'Type', 'Transport', 'Protocal','TimeStamp','Root','Parent','localHost', 'localPort', 'RemoteHost', 'RemoteHostname' ,'RemotePort'];
  sql: any;
  _connectiondata: IConnections[];
  data = [];
  dataSource : dionaeaDataSource;

  constructor( private dionaeaService : DionaeaService, private http : HttpClient) {
    // this.dataSource = new dionaeaDataSource(this.dionaeaDataSource.data);
  }

  
  findDionaeaConnLogs(
        sql:string, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<IConnections[]> {
        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('sql', sql.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res["payload"])
        );
    }


  ngOnInit() {
      this.getDionaeaResults("SELECT * FROM connections");
  }

  getDionaeaResults(sql){
      this.dionaeaService.getDionaeaConnectionLogs(sql).subscribe(
  		results => {
 	 		// this.dataSource = new dionaeaDataSource(results);	
 		  }
  	)
  }
  ngAfterViewInit() : void {
 
  }
}

export class dionaeaDataSource implements DataSource<IConnections> {
  constructor(private data : BehaviorSubject<IConnections[]>) {
    // super();
  }
  connect() {
    return this.data;
    // return this.dionaeaService.getDionaeaConnectionLogs("SELECT * FROM connections");
  }
  disconnect() {}
}
