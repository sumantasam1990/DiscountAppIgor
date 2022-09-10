import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public log = {email: '', pass: ''}

  constructor(
    private navctrl: NavController,
    private http: HttpClient,
    private loadingctrl: LoadingController,
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  signup() {
    this.navctrl.navigateForward('signup')
  }

  login() {
    this.auth.login(this.log.email, this.log.pass);
  }



}
