import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';
import { FormContactData } from '../interfaces/form-contact-data';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  
  urlForm = 'https://docs.google.com/forms/d/e/1FAIpQLScjJwRNKrvHzPmY1LXNJxUW_ajMKWXqTb93a9odMGvrvOfEqg/formResponse';

  fieldMapping: FormContactData = {
    name: 'entry.2005620554',
    email: 'entry.1045781291',
    organization: 'entry.1065046570',
    services: 'entry.1166974658',
    message: 'entry.839337160'
  };

  constructor(private http: HttpClient) { }

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
