import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  resetTransform(idElemento:string) {
    const elemento = document.getElementById(idElemento);
    if(elemento) {
      elemento.style.transform = `translate(0, 0) rotateY(0rad)`;
    }
  }

  transform(idElemento:string, mouseX: number, mouseY?: number) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
      const elementRect = elemento.getBoundingClientRect();
      const elementCenterX = elementRect.left + elementRect.width / 2;
      const elementCenterY = elementRect.top + elementRect.height / 2;
      let dataStrength: any = elemento.getAttribute('data-strength');
      const dx = ((mouseX - elementCenterX) / (2 + dataStrength));
      const dy = mouseY ? ((mouseY - elementCenterY) / (2 + dataStrength)) : 0;
      elemento.style.transform = `translate(${dx}px, ${dy}px)`;
    }
  }
}
