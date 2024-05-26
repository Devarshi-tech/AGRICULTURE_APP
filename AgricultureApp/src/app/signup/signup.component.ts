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

  constructor(private agrService: AgricultureService, private router: Router, public datastore: DataStoreService) { }

  ngOnInit() {
    if (this.agrService.getUser() != null) {
      this.user = this.agrService.getUser();
    }

  }

  createUser(user: any) {
    let tempUser: any = {
      userid: (user.userid != null || user.userid != undefined ? user.userid : null),
      name: user.name,
      contactNumber: user.contactNumber,
      password: user.password,
      email: user.email,
      farm: user.farm

    };
    this.agrService.createUser(tempUser).subscribe(
      (data: any) => {
        if (this.datastore.isUserEditFlag) {

          this.agrService.setUser(user);
          this.router.navigate(["/"]);
        } else {
          this.router.navigate(["/login"]);
        }
      }
    )
  }

}
