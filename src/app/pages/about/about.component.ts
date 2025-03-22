import { afterNextRender, Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { NgOptimizedImage } from '@angular/common'
import { animate, scroll } from 'motion';

@Component({
  selector: 'app-about',
  imports: [HeaderComponent, FooterComponent, NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor() {
    afterNextRender(() => this.initAnimations());
  }

  private initAnimations() {
    animate('.fade-up', { opacity: [0, 1], y: [-20, 0] }, { duration: 1 });
    animate('.fade-up-slowly', { opacity: [0, 1], y: [-50, 0] }, { duration: 1.5 });
  }
}
