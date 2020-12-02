import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }

  apiCall()
  {
    return this.http.get('https://uciymkiwjg.execute-api.ap-south-1.amazonaws.com/dev/login');
  }
}
