import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData:PaymentDetail = new PaymentDetail();
  readonly baseURL = 'http://localhost:5197/api/PaymentDetail';
  list: PaymentDetail[];

  constructor(
    private http: HttpClient
  ) { }

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .subscribe(res => this.list = res as PaymentDetail[]);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}

