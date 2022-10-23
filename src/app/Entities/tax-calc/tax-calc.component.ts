import { Component, OnInit } from '@angular/core';
import { TaxServiceService } from 'src/app/service/tax-service.service';

@Component({
  selector: 'app-tax-calc',
  templateUrl: './tax-calc.component.html',
  styleUrls: ['./tax-calc.component.css']
})
export class TaxCalcComponent implements OnInit {
  grossSalary:any = {
    taxableIncome:[],
    netPay:[],
    nssfContribution:[],
    taxBeforeRelief:[],
    personalRelief:[],
    healthInsuranceRelief:[],
    paye:[],
    nhifContribution:[]

  };

  constructor(
    private taxserviceservice:TaxServiceService
  ) {}

  ngOnInit(): void {
  }

   netSalaryCalc():void{ 
    this.taxserviceservice.netSalaryCalc(this.grossSalary).subscribe(
      (res:any)=>{
        console.log(res);

      },
      (err:any)=>{
        console.log(err);
      }
    )   
   } 

}
