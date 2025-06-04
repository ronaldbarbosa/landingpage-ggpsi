import { Component } from '@angular/core';
import { InfoComponent } from "./info/info.component";
import { SocialComponent } from "./social/social.component";

@Component({
  selector: 'app-footer',
  imports: [InfoComponent, SocialComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
