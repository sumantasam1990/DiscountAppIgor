import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import Swal from "sweetalert2";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public log = {email: '', pass: '', name: '', confpassword: '', tw: '', fb: '', pin: ''};

  constructor(
    private navctrl: NavController,
    private http: HttpClient,
    private loadingctrl: LoadingController,
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  login() {
    this.navctrl.navigateForward('login');
  }

  signup() {
    //this.auth.login(this.log.email, this.log.pass);
    Swal.fire({
      title: 'Your account created successfully.',
      text: 'Please check your email inbox/SPAM folder and verify your account.',
      icon: 'success',
      heightAuto: false,
    });
  }

}
