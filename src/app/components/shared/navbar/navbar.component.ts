import { Component, HostListener } from '@angular/core';
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

  toggleMenu() {
    let btnLinks = document.querySelectorAll('ul .btn-link');

    if (!this.isMenuOpen) {
      document.getElementById('overlay')?.classList.add('overlay-active');
      document.documentElement.style.overflow = 'hidden';

      for (var i = 0; i < btnLinks.length; i++) {
        btnLinks[i].classList.add('font-15');
      }
    } else {
      document.getElementById('overlay')?.classList.remove('overlay-active');
      document.documentElement.style.overflow = 'auto';

      for (var i = 0; i < btnLinks.length; i++) {
        btnLinks[i].classList.remove('font-15');
      }
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  resetMenu() {
    this.isMenuOpen = true;
    this.toggleMenu();
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
