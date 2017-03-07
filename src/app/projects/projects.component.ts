import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface IProject {
    title: string;
    color: string;
    technologies: [string];
    readme: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

    projects: Array<IProject> = [
      {title: 'MOM', color: 'lightblue', technologies: ['a','b'], readme: ''},
      {title: 'Puzzle', color: 'lightgreen', technologies: [''], readme: ''},
      {title: 'Calculator', color: 'lightpink', technologies: [''], readme: ''},
      {title: 'To Do App', color: '#DDBDF1', technologies: [''], readme: ''},
      {title: 'Classified App', color: 'yellowgreen', technologies: [''], readme: ''},
      {title: 'Inventory App', color: 'blanchedalmond', technologies: [''], readme: ''},
      {title: 'Reddit App', color: 'mediumturquoise', technologies: [''], readme: ''},
      {title: 'Music Search App', color: 'sandybrown', technologies: [''], readme: ''},
      {title: 'PWA-Inventory App', color: 'chocolate', technologies: [''], readme: ''},
      {title: 'Ionic-Inventory App', color: 'plum', technologies: [''], readme: ''},
      {title: 'Ionic-To Do App', color: 'silver', technologies: [''], readme: ''},
      {title: 'Spotify App', color: 'salmon', technologies: [''], readme: ''},
      {title: 'Online Parking Booking App', color: 'palevioletred', technologies: [''], readme: ''}
    ];

    prj = this.projects[0];

  constructor(private route: Router) {}

  showDetails(project) {
    this.prj = project;
  }

}
