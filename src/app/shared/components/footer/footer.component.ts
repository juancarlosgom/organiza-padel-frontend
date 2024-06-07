import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  public email: string = 'organizapadel@info.com';
  private router = inject(Router);

  addResults() {
    Swal.fire({
      icon: 'info',
      html: `
        <p>Para añadir resultados, primero debe confirmar el administrador de la partida. A continuación,
        a cada jugador le aparecerá en su perfil un botón de <i>confirmar resultados</i> si está de acuerdo con el resultado
        pulse en confirmar.</p>
      `,
      confirmButtonText: 'Ok',
    });
  }

  neverConfirmation() {
    Swal.fire({
      icon: 'info',
      html: `
        <p>En caso de que falte algún jugador por confirmar la partida, este resultado no se añadirá a la app. Por lo tanto,
        querrá decir que no se está de acuerdo con este resultado y no se sumarán ni restarán los puntos del ranking.
        Podrán reclamar en caso de que se detecte mal uso de la app en nuestro correo proporcionado.</p>
      `,
      confirmButtonText: 'Ok',
    });
  }

  howCreateGame() {
    Swal.fire({
      icon: 'info',
      html: `
        <p>Para crear una partida, deberá dirigise a:
        partidas->crear partida donde debe seleccionar el día y fecha de la partida. Por último,
        podrá elegir el tipo de partida y pinchará en <i>crear partida</i>.</p>
      `,
      confirmButtonText: 'Ok',
    });
  }

  openInstagram() {
    window.open('https://www.instagram.com', '_blank');
  }

  openTwitter() {
    window.open('https://x.com', '_blank');
  }

  openFacebook() {
    window.open('https://www.facebook.com', '_blank');
  }

  openYoutube() {
    window.open('https://www.youtube.com', '_blank');
  }

  openPhone() {
    window.open('https://www.whatsapp.com', '_blank');
  }

  openEmail() {
    window.open('https://www.google.com/intl/es/gmail/about', '_blank');
  }

  openMaps() {
    window.open('https://www.google.es/maps/place/Mon%C3%B3var', '_blank');
  }

}
