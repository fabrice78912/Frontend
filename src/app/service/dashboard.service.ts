import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url= environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

   getDetails(): any{
   this.httpClient.get(this.url+ "/dashboard/details");
  }
}
