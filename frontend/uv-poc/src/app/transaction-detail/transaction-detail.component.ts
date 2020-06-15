import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RefundService } from '../service/refund.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: [],
})
export class TransactionDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private refundService: RefundService,
    private route: Router
  ) {}
  private headerData;
  transactionId;
  phoneNo;
  transactionType;
  name;
  operator;
  pfid;
  saleCns;
  rental;
  postedOn;
  discountPct;
  discountSubtotal: number;
  refundManagerName;
  refundTicketNumber;

  ngOnInit() {
    this.headerData = history.state.transactionData['customerDetails'];
    console.log(this.headerData);
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   console.log(history.state.transactionData);
      // this.headerData = JSON.parse(params['transactionData']);
      
    // });
  }

  setValues(details) {
    // console.log(details['customerDetails']);
    // this.transactionId = details.customerDetails['transactionId'];
    // this.phoneNo = details.customerDetails['phoneNo'];
    // this.transactionType = details.customerDetails['transactionType'];
    // this.operator = details.customerDetails['operator'];
    // this.name = details.customerDetails['name'];
    // this.pfid = details.customerDetails['pfid'];
    // this.saleCns = details.customerDetails['saleCns'];
    // this.rental = details.customerDetails['rentalNo'];
    // this.postedOn = details.customerDetails['date'];
  }

  showRefundDetails() {
    this.refundService
      .refundDetails(this.transactionId)
      .subscribe((res: any) => {
        this.refundManagerName = res.refundData['refundMgrName'];
        this.refundTicketNumber = res.refundData['ticketNumber'];
      });
  }
}
