import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgricultureService } from '../../services/agriculture.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, DialogModule, ButtonModule, InputTextModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {
  @Input() screenWidth: any;
  @Input() isHeader: any;
  @Input() isFooter: any;
  // @Input() isFooter:boolean;

  constructor(public dataStore: DataStoreService, private agrService: AgricultureService, public router: Router) { }

  globalSearch: String = "";

  menuItemsList: any = [
    { name: "Home", iconsClassList: ["footer-icon footer-icon-home navbar-brand"], routerLink: "/home" },
    { name: "Bhaav", iconsClassList: ["footer-icon footer-icon-indian-rupee navbar-brand"], routerLink: "/mandibhaav" },
    { name: "Calculator", iconsClassList: ["footer-icon footer-icon-calculator navbar-brand"], routerLink: "/labourCalculator" },
    { name: "Photos", iconsClassList: ["footer-icon footer-icon-camera navbar-brand"], routerLink: "/home" },
    { name: "Settings", iconsClassList: ["footer-icon footer-icon-gear-solid navbar-brand"], routerLink: "/settings" },

  ];
  isLoggedIn: boolean = false;
  user: any = {};

  ngOnInit() {
    this.dataStore.isLoggedIn = this.agrService.isLoggedIn();

  }

  loggedInUser() {
    this.user = this.agrService.getUser();
    this.visible = true;
  }


  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  logOut() {
    this.agrService.logout();
    this.dataStore.currentPage = "login";
    this.router.navigate(["/login"]);

  }

}
