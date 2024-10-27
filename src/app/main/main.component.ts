import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { GlobalServiceService } from '../service/global-service.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  translation = inject(GlobalServiceService)

  constructor(private router: Router, private route: ActivatedRoute, private translationService: GlobalServiceService) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    if(this.translation.isGerman){
      this.translationService.translatePage("de");
    }
    else{
      this.translationService.translatePage("en");
    } 
  }
}
