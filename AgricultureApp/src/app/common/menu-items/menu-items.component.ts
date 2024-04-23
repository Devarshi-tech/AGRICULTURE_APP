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
    { name: "Home", iconsClassList: ["fas fa-home navbar-brand"], routerLink: "/home" },
    { name: "Bhaav", iconsClassList: ["fas fa-indian-rupee navbar-brand"], routerLink: "/mandibhaav" },
    { name: "Calculator", iconsClassList: ["fas fa-calculator navbar-brand"], routerLink: "/labourCalculator" },
    { name: "Photos", iconsClassList: ["fas fa-camera navbar-brand"], routerLink: "/home" },
    { name: "Settings", iconsClassList: ["fas fa-share navbar-brand"], routerLink: "/settings" },
    // { name: "Settings", iconsClassList: ["fas fa-share navbar-brand"], routerLink: "/settings" }

  ];

  ngOnInit() {
    this.showGoToTopButtonMethod();
  }

  @HostListener('window:scroll', ['$event'])
  showGoToTopButtonMethod() {
    if (typeof window !== 'undefined') {
      console.log(window.location.pathname);
    }
  }



}
