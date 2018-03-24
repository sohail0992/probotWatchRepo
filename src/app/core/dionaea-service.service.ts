import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import { IConnections } from "../Model/DionaeaModel";

@Injectable()
export class DionaeaService {
  private _dionaea_url = 'http://localhost:3000/dionaea/connections';
  constructor(private http: HttpClient) {}

  getDionaeaConnectionLogs(sql) : Observable<IConnections[]>{
      var query = {
        sql : sql,
      };   
     return this.http.post<IConnections[]>(this._dionaea_url,query);
  }

}