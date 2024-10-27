import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements AfterViewInit {

  skills = [
    {
      image: "js-icon",
      name: "JavaScript",
    },
    {
      image: "angular-icon",
      name: "Angular",
    },
    {
      image: "ts-icon",
      name: "TypeScript",
    },
    {
      image: "html-icon",
      name: "HTML",
    },
    {
      image: "git-icon",
      name: "GIT",
    },
    {
      image: "firebase-icon",
      name: "Firebase",
    },
    {
      image: "css-icon",
      name: "CSS",
    },
    {
      image: "api-icon",
      name: "Rest-Api",
    },
  ]

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
