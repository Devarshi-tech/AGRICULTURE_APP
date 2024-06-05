import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AgricultureService } from '../services/agriculture.service';
import { AuthInterceptorProviders } from '../services/auth.interceptor';
import { DataStoreService } from '../services/data-store.service';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule, RouterLink, RouterLinkActive,
    ButtonModule
  ],
  providers: [AuthInterceptorProviders],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private agricultureService: AgricultureService, public dataStore: DataStoreService,public router:Router
  ) { }

  loginData: any = {
    contactNumber: '',
    password: ''
  }

  mandatoryValidationMessage: String = "";
  isLoginByOTP:boolean = false;
  oneTimePassword:number = 0;
  loading:boolean = false;


  formSubmit(loginData: any) {
    if (loginData.contactNumber.trim() == '' || loginData.contactNumber == null) {
      this.mandatoryValidationMessage = "Contact number is required !!";
      this.mandatoryMessageClassList = ["text-red-700"];
      return;
    }
    if (loginData.password.trim() == '' || loginData.password == null) {
      this.mandatoryValidationMessage = "Password is required !!";
      this.mandatoryMessageClassList = ["text-red-700"];
      return;
    }

    // request server to generate token
    this.agricultureService.generateToken(loginData).subscribe((data: any) => {

      this.agricultureService.loginUser(data.jwtToken);
      this.agricultureService.getCurrentUser().subscribe((data: any) => {

        this.agricultureService.setUser(data);
        
      })
      this.dataStore.messageAlert = "Logged in successfully!";
      this.dataStore.messageAlertSevierity = ["text-teal-700"];
      this.router.navigate([""]);

    },
      (error) => {
        this.mandatoryValidationMessage = "Invalid credentials !!";
        this.mandatoryMessageClassList = ["text-red-700"];
        console.log(error);
      })


  }

  mandatoryMessageClassList:string[] = [];

  ngOninit(){

    this.dataStore.messageAlert= "";
   
  }

  // sendOTP(){
  //   this.isLoginByOTP  = true;
  //   this.loading = true;
  //   this.agricultureService.generateOTP(this.loginData.contactNumber).subscribe(
  //     (data:any)=>{
  //       this.mandatoryValidationMessage = data;
  //       if(data!=null && data!= ""){
  //         this.loading= false;
  //       }
  //     }
  //   )
  // }

}
