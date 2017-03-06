import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  tiles = [
      {text: '../../assets/Images/ionic.jpg', cols: 3, rows: 1, color: 'lightblue'},
      {text: '../../assets/Images/angular.png', cols: 1, rows: 2, color: 'lightgreen'},
      {text: '../../assets/Images/ts.jpg', cols: 1, rows: 1, color: 'lightpink'},
      {text: '../../assets/Images/html.png', cols: 2, rows: 1, color: '#DDBDF1'},
      {text: '../../assets/Images/css.png', cols: 2, rows: 1, color: 'yellowgreen'},
      {text: '../../assets/Images/js.png', cols: 2, rows: 1, color: 'blanchedalmond'},
      {text: '../../assets/Images/firebase.png', cols: 2, rows: 1, color: 'mediumturquoise'},
      {text: '../../assets/Images/git.png', cols: 2, rows: 1, color: 'sandybrown'},
      {text: '../../assets/Images/redux.png', cols: 2, rows: 1, color: 'chocolate'},
      {text: '../../assets/Images/bootstrap.jpg', cols: 2, rows: 1, color: 'plum'},
      {text: '../../assets/Images/angFire.jpg', cols: 2, rows: 1, color: 'silver'},
      {text: '../../assets/Images/rxjs.png', cols: 2, rows: 1, color: 'salmon'},
    ];

    items = [
      {title: 'MBA', subtitle: 'Marketing', cgpa: '3.56 / 4.00', batch: '2012 - 2014'},
      {title: 'BCS', subtitle: 'Software Engineering', cgpa: '3.12 / 4.00', batch: '2006 - 2009'}
    ];

  constructor(private route: Router) {}

  ngOnInit() {
  }

}
