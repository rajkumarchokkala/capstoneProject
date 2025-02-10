import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
  orderForm!:FormGroup;
  showError:boolean=false;
  errorMessage:any;
  showMessage:any;
  responseMessage:any;
  orderList!:any[];
  statusModel:any={newStatus:null}

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.httpService.getOrders().subscribe({
      next: (response: any) => {
        this.orderList = response;
      },
      error: (error) => {
        this.showError = true;
        this.errorMessage = "";
      }
    });
  }

  viewDetails(id: number): void {
    // this.router.navigate(['/order-details', id]);
  }

  edit(order: any): void {
    this.statusModel.newStatus = order.status;
    this.orderForm.patchValue({ newStatus: order.status });
  }

  update(id: number,newStatus:string): void {
    if (this.orderForm.valid) {
      this.httpService.updateOrderStatus(id, this.orderForm.value.newStatus).subscribe({
        next: (response: any) => {
          this.responseMessage = response.message;
          this.showMessage = true;
          this.getOrders(); 
        },
        error: (error) => {
          this.showError = true;
          this.errorMessage = "";
        }
      });
    } else {
      this.showError = true;
      this.errorMessage=" ";
}
 
}}
 