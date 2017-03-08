import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProject, PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    projects = this.portfolio.projects;
    prj: IProject = this.projects[0];

  constructor(
    private route: Router,
    public portfolio: PortfolioService
  ) {}

  showDetails(project) {
    this.prj = project;
  }

}
