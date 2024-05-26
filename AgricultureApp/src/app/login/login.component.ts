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


  formSubmit(loginData: any) {
    if (loginData.contactNumber.trim() == '' || loginData.contactNumber == null) {
      this.mandatoryValidationMessage = "Contact number is required !!";
      return;
    }
    if (loginData.password.trim() == '' || loginData.password == null) {
      this.mandatoryValidationMessage = "Password is required !!";
      return;
    }

    // request server to generate token
    this.agricultureService.generateToken(loginData).subscribe((data: any) => {

      this.agricultureService.loginUser(data.jwtToken);
      this.agricultureService.getCurrentUser().subscribe((data: any) => {

        this.agricultureService.setUser(data);
        
      })
      this.router.navigate([""]);
    },
      (error) => {
        this.mandatoryValidationMessage = "Invalid credentials !!";
        console.log(error);
      })


  }

  ngOninit(){
   
  }

}
