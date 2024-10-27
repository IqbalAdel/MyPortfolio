import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  screenWidth: number = 0;
  screenHeight: number = 0;

  ngOnInit() {  
    AOS.init({
      duration: 1200, // Dauer der Animationen in Millisekunden
      easing: 'ease-in-out', // Easing-Funktion der Animationen
      once: true, // Animationen nur einmal abspielen
      mirror: false // Animationen beim Zurückscrollen nicht abspielen
    });
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight; 
  }

  

  @HostListener('window:resize', ['$event'])
 onWindowResize() {
   this.screenWidth = window.innerWidth;
   this.screenHeight = window.innerHeight;
   
 }

}
