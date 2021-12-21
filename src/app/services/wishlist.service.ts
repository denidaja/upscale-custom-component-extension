import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  getTimesBought(productID: any) {
    return this.http.get(this.apiEndpoint + `?productID="${productID}"`);
  }
}
