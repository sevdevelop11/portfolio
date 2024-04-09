import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private sharedService: SharedService) {}

  setMenu() {
    if (!this.isMenuOpen) {
      document.getElementById('overlay')?.classList.add('overlay-active');
      document.documentElement.style.overflow = 'hidden';
      let btnLinks = Array.from(
        document.getElementsByClassName(
          'btn-link'
        ) as HTMLCollectionOf<HTMLElement>
      );

      for (var i = 0; i < btnLinks.length; i++) {
        btnLinks[i].style.fontSize = '1.5rem';
      }
    } else {
      document.getElementById('overlay')?.classList.remove('overlay-active');
      document.documentElement.style.overflow = 'auto';
      let btnLinks = Array.from(
        document.getElementsByClassName(
          'btn-link'
        ) as HTMLCollectionOf<HTMLElement>
      );
  
      for (var i = 0; i < btnLinks.length; i++) {
        btnLinks[i].style.fontSize = '1rem';
      }
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  transform(idElemento: string, event: MouseEvent) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    this.sharedService.transform(idElemento, mouseX, mouseY);
  }

  resetTransform(idElemento: string) {
    this.sharedService.resetTransform(idElemento);
  }

  @HostListener('window:scroll', ['$event'])
  showMenu($event: Event) {
    let menuScroll = document.getElementById('menu-scroll');
    scrollY > 60
      ? menuScroll
        ? (menuScroll.style.transform = 'scale(1)')
        : ''
      : menuScroll
      ? (menuScroll.style.transform = 'scale(0)')
      : '';
  }
}
