import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalServiceService } from '../service/global-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  screenWidth: number = 0;  
  screenHeight: number = 0;  
  mobile: boolean = false;
  global_service = inject(GlobalServiceService)

  items = [
    {
      section: "About me",
      id:"About_me",
    },
    {
      section: "Skills",
      id:"Skills",
    },
    {
      section: "Portfolio",
      id:"Portfolio",
    },
    {
      section: "Contact",
      id:"Contact",
    }
];
  activeIndex: number | null = null;

    
  ngOnInit() {  
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight; 
    this.screenWidth < 992 ? this.mobile = true : this.mobile = false;  
  }  

 @HostListener('window:resize', ['$event'])
 onWindowResize() {
   this.screenWidth = window.innerWidth;
   this.screenHeight = window.innerHeight;
   if(this.screenWidth < 992 && this.global_service.open){
    this.global_service.open= true
   }
   else{
    this.global_service.open = false; 
    document.body.classList.remove('scroll-stop');
   }
 }

 linkActive(index:number){
  this.activeIndex = index;

 }

  openOverlay() {
    this.global_service.open = !this.global_service.open;
    if (this.global_service.open) {
      document.body.classList.add('scroll-stop');
    } else {
      document.body.classList.remove('scroll-stop');
    }
  }

}
