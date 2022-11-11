import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string ;
  password: string ;
  formData: FormGroup ;
  visto: any;
  equis: any;

  constructor(
    private elementRef: ElementRef,
    private authService : AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      email: new FormControl("admin"),
      password: new FormControl("admin"),
   });
    // get return url from route parameters or default to '/'
    this.visto = this.elementRef.nativeElement.querySelector('.visto');

    this.equis = this.elementRef.nativeElement.querySelector('.equis');
  }

  onClickSubmit(data: any) {
    this.email = data.email;
    this.password = data.password;

    console.log("Login page: " + this.email);
    console.log("Login page: " + this.password);

    this.authService.login(this.email, this.password)
       .subscribe( data => {
          console.log("Is Login Success: " + data);

         if(data) this.router.navigate(['/home']);
    });
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
