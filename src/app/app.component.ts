import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
const tokml = require('tokml');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'test-project';
  geoObject = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [125.6, 10.1],
    },
    properties: {
      name: 'Dinagat Islands',
    },
  };
  kmlObject = tokml(this.geoObject);
  constructor(router: Router) { }
  ngOnInit() {
    console.log(this.kmlObject);
  }

  alert() {
    alert('hello');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      let loader = document.getElementById('loader');
      if (loader != null) loader.style.display = 'none';
    }, 1000);

  }
}
