import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL: string = environment.serverAPI + 'sanctum/token';

  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingctrl: LoadingController,
    private nav: NavController,
  ) { }

  async login(username: string, password: string) {
    this.presentLoading();
    const myheader = new HttpHeaders();
    //myheader.set('Access-Control-Allow-Origin', '*');
    myheader.set('Content-Type', 'application/x-www-form-urlencoded');

    const formData = new FormData();
    formData.append('email', username);
    formData.append('password', password);

     this.http.post<any>(this.authURL, formData, {
      headers: myheader
    }).subscribe(response => {
      this.loadingctrl.dismiss();

      if(response.token) {
        localStorage.setItem('token', response.token);
        this.nav.navigateRoot('');
      } else {
        alert(response.err);
      }



    });
  }

  currentAuthTokenValue() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.clear();
    return this.nav.navigateRoot('login')

  }

  async presentLoading() {
    const loading = await this.loadingctrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait... Do not close or minimize or back the app',
      duration: 8000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
