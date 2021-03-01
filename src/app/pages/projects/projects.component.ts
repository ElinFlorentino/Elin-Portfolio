import { Component, OnInit } from '@angular/core';
import { Navigation, NavigationExtras, Router } from '@angular/router';
import { Project } from 'src/app/models/project.interface';
import { ProjecService } from 'src/app/service/projec.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProyectsComponent implements OnInit {
  projects$ = this.projectSvs.projects;

  naEx: NavigationExtras = {
    state: { project: null },
  };

  constructor(private route: Router, private projectSvs: ProjecService) {}

  ngOnInit(): void {}

  goToDetails(project: Project) {
    this.naEx.state!.project = project;
    this.route.navigate(['projects/' + project.id], this.naEx);
  }
}
