import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './common/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AgricultureApp';

  public getScreenWidth: any;
  getScreenHeight: any;
  isFooter: boolean = true;
  isHeader: boolean = true;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      // Access window here
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
      if (this.getScreenWidth > 600) {
        this.isDesktopView = true;
      }
      if(this.getScreenWidth<=600){
        this.isDesktopView = false;
      }
    }

  }
  isDesktopView: boolean = true;
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (typeof window !== 'undefined') {
      // Access window here
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
      if (this.getScreenWidth > 600) {
        this.isDesktopView = true;
      }
      if(this.getScreenWidth<=600){
        this.isDesktopView = false;
      }
    }
  }


}
