import { Component, HostListener, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {
  @Input() screenWidth: any;
  @Input() isHeader: any;
  @Input() isFooter: any;
  // @Input() isFooter:boolean;
  
  menuItemsList: any = [
    { name: "Home", iconsClassList: ["footer-icon footer-icon-home navbar-brand"], routerLink: "/home" },
    { name: "Bhaav", iconsClassList: ["footer-icon footer-icon-indian-rupee navbar-brand"], routerLink: "/mandibhaav" },
    { name: "Calculator", iconsClassList: ["footer-icon footer-icon-calculator navbar-brand"], routerLink: "/labourCalculator" },
    { name: "Photos", iconsClassList: ["footer-icon footer-icon-camera navbar-brand"], routerLink: "/home" },
    { name: "Settings", iconsClassList: ["footer-icon footer-icon-share navbar-brand"], routerLink: "/settings" },

  ];

  ngOnInit() {
  }




}
