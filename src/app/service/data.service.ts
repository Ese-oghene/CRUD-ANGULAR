import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/employ')
  }

  insertData(data: Employee){
    return this.httpClient.post('http://127.0.0.1:8000/api/postEmployee', data, {
      headers: {
          'Content-Type': 'application/json'
      }
  })
  }

  deleteData(id: number | string) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteEmployee/'+id)
  }

  getEmployeeById(id: number | string){
    return this.httpClient.get('http://127.0.0.1:8000/api/employ/'+id)
  }

  updataData(id: number | string ,data: Employee){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateEmployee/'+id, data, {
      headers: {
          'Content-Type': 'application/json'
      }
  })
  }

}
