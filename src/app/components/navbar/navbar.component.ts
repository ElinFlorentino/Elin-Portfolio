import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // navSlide() {
  //   const slideBtn = <HTMLInputElement>document.getElementById('btn-navbar')!;
  //   slideBtn.checked = false;
  // }
}

window.onload = function () {
  const links = document.getElementsByClassName("nav-link")!;
  const slideCheck = <HTMLInputElement>document.getElementById('btn-navbar')!;
  for(var i = 0; i < links.length;i++){
    links[i].addEventListener('click',()=>{
      slideCheck.checked = false;
    })
  }

};
