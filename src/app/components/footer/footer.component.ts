import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private today = new Date();
  private currentDate: number = this.today.getFullYear();

  constructor() {
  }

  ngOnInit() {
    this.initMap();
  }

  getYear () {
    return this.currentDate;
  }

  initMap() {
    const myLatLng = {
      lat: 24.488724,
      lng: 54.356653
    };
    const mapDiv = document.getElementById('map');
    const map = new google.maps.Map(mapDiv, {
      center: myLatLng,
      zoom: 14
    });
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'iibratan'
    });
  }
}
