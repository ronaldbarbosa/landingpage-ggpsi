import { Component, input } from '@angular/core';
import { Title } from '../../interfaces/Title';

@Component({
  selector: 'app-page-title',
  imports: [],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.css'
})
export class PageTitleComponent {
  pageTitle = input.required<Title>();
}
