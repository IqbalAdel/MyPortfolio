import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    
  ngOnInit() {  
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight; 
    this.screenWidth < 992 ? this.mobile = true : this.mobile = false;  
  }  

 @HostListener('window:resize', ['$event'])
 onWindowResize() {
   this.screenWidth = window.innerWidth;
   this.screenHeight = window.innerHeight;
   this.screenWidth < 992 ? this.mobile = true : this.mobile = false;  
 }
}
