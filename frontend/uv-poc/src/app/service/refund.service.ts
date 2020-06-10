import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RefundService {
  constructor(private http: HttpClient) {}

  baseUri: string = environment.baseUrl;

  refundDetails(transactionId) {
    return this.http.get(`${this.baseUri}/transaction/${transactionId}/refund`);
  }
}