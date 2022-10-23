import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaxServiceService {
  baseUrl :string = environment.API_ENDPOINT;

  constructor(
    private httpClient: HttpClient
  ) { }

  netSalaryCalc(grossSalary:any):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl +'/api/v1/computeTax', grossSalary,{observe:'response'});
  }
}
