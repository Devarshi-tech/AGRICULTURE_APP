import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AgricultureService } from '../services/agriculture.service';
import { DataStoreService } from '../services/data-store.service';

interface User {
  userid: number,
  name: string,
  farm: number,
  password: string,
  contactNumber: string,
  email: string
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule, RouterLink, RouterLinkActive,
    ButtonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  next: boolean = false;

  user: User | any = {};
  loading: boolean = false;
  contactIsUnique: boolean | any = null;
  mandatoryValidationMessage: string = "";
  mandatoryMessageClassList: any = [];
  tempPassword: string = ""

  constructor(private agrService: AgricultureService, private router: Router, public datastore: DataStoreService) { }

  ngOnInit() {
    if (this.agrService.getUser() != null) {
      this.user = this.agrService.getUser();
    }

    this.tempPassword = this.user.password;

  }

  createUser(user: any) {
    let isPasswordChanged: boolean = !(user.password === this.tempPassword);
    let tempUser: any = {
      userid: (user.userid != null || user.userid != undefined ? user.userid : null),
      name: user.name,
      contactNumber: user.contactNumber,
      password: user.password === this.tempPassword ? this.tempPassword : user.password,
      email: user.email,
      farm: user.farm

    };
    this.agrService.createUser(tempUser, this.datastore.isUserEditFlag, isPasswordChanged).subscribe(
      (data: any) => {
        if (this.datastore.isUserEditFlag) {

          this.agrService.setUser(user);
          this.router.navigate(["/"]);
        } else {
          this.datastore.messageAlert = "Welcome! Account Created Successfully.";
          this.datastore.messageAlertSevierity = ["text-green-700	"];
          this.router.navigate(["/login"]);
        }
      }
    )
  }

  uniqueUserValidation(user: any) {
    this.loading = true;
    if (user.contactNumber != null && user.contactNumber != "" && user.contactNumber != undefined && user.contactNumber.length != 10) {
      this.mandatoryMessageClassList = ["text-red-700"];
      this.mandatoryValidationMessage = "Enter valid contact number!";
      return;
    }
    if (user.password != null && user.password != undefined && user.password.length < 4) {
      this.mandatoryMessageClassList = ["text-red-700"];
      this.mandatoryValidationMessage = "Password Should contain at least 4 numbers or characters!";
      return;
    }
    if (!this.datastore.isUserEditFlag) {
      if (user.contactNumber != null && user.contactNumber != "" && user.contactNumber != undefined) {

        this.agrService.uniqueUserValidation(user).subscribe((data: any) => {
          this.loading = false;
          this.contactIsUnique = data;

          if (this.contactIsUnique == true) {
            this.mandatoryMessageClassList = ["text-teal-700"];
            this.mandatoryValidationMessage = "Verified!";
            setTimeout(() => {
              this.next = true;
              this.mandatoryValidationMessage = "";
            }, 1000);
          }
          else {
            this.contactIsUnique = false;
            this.mandatoryMessageClassList = ["text-red-700"];
            this.mandatoryValidationMessage = "Contact number already exists!!";
          }
        })
      }
      else {
        this.mandatoryMessageClassList = ["text-red-700"];
        this.mandatoryValidationMessage = "Invalid inputs!!";
        setTimeout(() => {
          this.mandatoryValidationMessage = "";
        }, 1500);
      }
    }
    else {

        this.loading = false;
        this.next = true;

      

    }
  }

}
