import { CommonModule } from '@angular/common';
import { Component, Input, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit{
  @Input() marginRight:boolean = false;

  projects = [
    {
    title: "JOIN",
    tech: "Javascript | HTML | CSS | Firebase",
    description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    image: "join_img",
    reverse: false,
    url:"https://www.join.iqbal-adel.com/index.html",
    git: "https://github.com/IqbalAdel/join139",
    },
    {
    title: "El Pollo Loco",
    tech: "Javascript | HTML | CSS | ",
    description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
    image: "Pollo_loco",
    reverse: true,
    url: "https://www.el-pollo-loco.iqbal-adel.com/index.html",
    git: "https://github.com/IqbalAdel/PolloLoco",
    },

  ]

  screenWidth: number = 0;  
  screenHeight: number = 0;  

    
  ngOnInit() {  
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight; 
  }  

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
