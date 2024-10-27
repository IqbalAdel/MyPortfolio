import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy/privacy.component.html',
  styleUrl: './privacy/privacy.component.scss'
})
export class PrivacyComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}