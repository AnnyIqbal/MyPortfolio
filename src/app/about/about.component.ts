import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  tiles = [
      {text: '../../assets/Images/ionic.jpg', color: 'lightblue'},
      {text: '../../assets/Images/angular.png', color: 'lightgreen'},
      {text: '../../assets/Images/ts.jpg', color: 'lightpink'},
      {text: '../../assets/Images/html.png', color: '#DDBDF1'},
      {text: '../../assets/Images/css.png', color: 'yellowgreen'},
      {text: '../../assets/Images/js.png', color: 'blanchedalmond'},
      {text: '../../assets/Images/firebase.png', color: 'mediumturquoise'},
      {text: '../../assets/Images/git.png', color: 'sandybrown'},
      {text: '../../assets/Images/redux.png', color: 'chocolate'},
      {text: '../../assets/Images/bootstrap.jpg', color: 'plum'},
      {text: '../../assets/Images/angFire.jpg', color: 'silver'},
      {text: '../../assets/Images/rxjs.png', color: 'salmon'}
    ];

    newTechs = [
      {text: '../../assets/Images/nodejs.png', color: 'beidge'},
      {text: '../../assets/Images/mongodb.png', color: 'violet'}
    ];
    items = [
      {title: 'MBA', subtitle: 'Marketing', cgpa: '3.56 / 4.00', batch: '2012 - 2014'},
      {title: 'BCS', subtitle: 'Software Engineering', cgpa: '3.12 / 4.00', batch: '2006 - 2009'}
    ];

  constructor(private route: Router) {}

  ngOnInit() {
  }

}
