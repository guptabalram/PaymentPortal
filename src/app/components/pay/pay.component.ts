import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentDetailComponent } from '../payment-detail/payment-detail.component';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*getDetail()
  {
    this.router.navigateByUrl(['payment-detail.component.html'])
  }
*/


}
