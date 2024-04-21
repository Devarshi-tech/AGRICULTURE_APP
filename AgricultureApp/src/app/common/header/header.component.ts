import { Component, Input } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { AgricultureService } from '../../services/agriculture.service';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive,MenuItemsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() screenWidth: any;
  @Input() isHeader:any;

  constructor(public agricultureServices: AgricultureService) { }

  ngOnInit() {
    

  
  }

}
