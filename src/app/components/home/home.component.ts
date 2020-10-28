import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public selected: string;
  constructor() {}

  panelOpenState = false;
  typeOfContacts: string[] = [
    'Phone: 054-6891011',
    'Email: eliadengel@gmail.com',
    'GitHub: Eliadeng',
    'LinkedIn: Eliad Engelstein',
  ];

  ngOnInit(): void {
    //document.body.style.background = 'cornFlowerBlue';
  }
}
