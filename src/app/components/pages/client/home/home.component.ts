import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  array = ['1.png','2.jpg','3.jpg'];

  constructor(

  ) {

  }


  ngOnInit(): void {
  }

}

