import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  visto: any;
  equis: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.visto = this.elementRef.nativeElement.querySelector('.visto');

    this.equis = this.elementRef.nativeElement.querySelector('.equis');
  }

  cambio() {
    if (this.visto.style.display = 'block') {
      this.visto.style.display = 'none';
      this.equis.style.display = 'block';
    }

    if (this.equis.style.display = 'block') {
      this.equis.style.display = 'none';
      this.visto.style.display = 'block';
    }
  }
}
