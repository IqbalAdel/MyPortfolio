import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
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
}
