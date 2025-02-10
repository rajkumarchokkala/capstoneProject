import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

   formModel:any={status:null}; 
   showError:boolean=false; 
   errorMessage:any;
   assignModel: any={}; 
   itemForm!: FormGroup; 
   showMessage: any; 
   responseMessage: any; 
   maintenanceObj: any={};
   hospitalList:any=[]; 
   maintenanceList: any=[]; 
   scheduledDate!:Date;
   completedDate!:Date;


   hospitals:any;
   maintenances:any;



constructor(private fb:FormBuilder,private httpService:HttpService){

}


  ngOnInit(): void {
   this.hospitals  =  this.httpService.getAllHospitals();
   this.maintenances = this.httpService.getManitenanceList();
  }


}

