import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  implements OnInit{
  itemForm!:FormGroup;
  formModel:any={role:null,email:'',password:'',username:''};
  registrationrole=['HOSPITAL','TECHNICIAN','SUPPILER'];
  showMessage:boolean=false;
  responseMessage:any;
  constructor(private service:HttpService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.itemForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      email:['',[Validators.required]],
      role:null,
    })
  }

  onRegister(){
    if(this.itemForm.valid){
      this.service.addEquipment(this.itemForm.value).subscribe(()=>{
        this.showMessage=true;
        this.responseMessage="Welcome hospital you are successfully registered"  
      })
    }
  }
}




