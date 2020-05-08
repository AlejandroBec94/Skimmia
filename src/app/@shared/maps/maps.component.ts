import {Component} from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  lat: any;
  lng: any;

  zoom: number = 15;

  constructor() {
    if (navigator.geolocation) {
      // No muestra localización exacta debido a que esta en modo desarrollador
      navigator.geolocation.getCurrentPosition(position => {
        this.lng = position.coords.longitude;
        this.lat = position.coords.latitude;
      });
    }
  }

}
