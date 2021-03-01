import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  project: Project;

  constructor(private router: Router) {
    const nav = router.getCurrentNavigation();
    this.project = nav?.extras?.state!.project;
  }

  ngOnInit(): void {
    console.log(this.project)
  }

  goBack(){
    this.router.navigate(["projects"]);
  }
}
