import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.scss']
})
export class GetApiComponent implements OnInit {
  mytestapi:any;
  private url = "http://45.79.71.170:3005/category/getAll";
  constructor(http:HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'api_key': 'SExEQGZsYXNoX2JlYXRfQXBpX2luX05vZGVqcw=='
      })
    };
    http.get(this.url, httpOptions)
    .subscribe(response=>{
      console.log(response);
      this.mytestapi = response; 
    });
   }

  ngOnInit() {
  }

}
