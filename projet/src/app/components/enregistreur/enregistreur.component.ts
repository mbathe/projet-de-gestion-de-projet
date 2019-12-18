import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enregistreur',
  templateUrl: './enregistreur.component.html',
  styleUrls: ['./enregistreur.component.scss']
})
export class EnregistreurComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'enregistreur';
  navigations = [
    {
      label: 'home',
      link : '#'
    }
  ];

  users = [
    {
      label: 'user1 '
    },
    {
      label: 'user2'
    }
  ];
}
