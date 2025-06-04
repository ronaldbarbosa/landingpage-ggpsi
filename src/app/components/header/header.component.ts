import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { LogoComponent } from "./logo/logo.component";

@Component({
  selector: 'app-header',
  imports: [NavComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
