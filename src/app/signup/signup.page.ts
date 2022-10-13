import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import Swal from 'sweetalert2';
import {environment} from '../../environments/environment';
import {Camera, CameraResultType} from '@capacitor/camera';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public log = {email: '', pass: '', name: '', confpass: '', tw: '', fb: '', pin: ''};
  authURL: string = environment.serverAPI + 'register';
  imageData = '';
  mainPhoto = '';

  constructor(
    private navctrl: NavController,
    private http: HttpClient,
    private loadingctrl: LoadingController,
    private router: Router,
    private auth: AuthService,
    private nav: NavController,
  ) { }

  ngOnInit() {
  }

  login() {
    this.navctrl.navigateForward('login');
  }

  signup() {
    if(this.log.pass === this.log.confpass) {
      this.presentLoading();
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const params = new FormData();
      params.append('name', this.log.name);
      params.append('email', this.log.email);
      params.append('password', this.log.pass);
      params.append('tw', this.log.tw);
      params.append('fb', this.log.fb);
      params.append('pin', this.log.pin);
      params.append('photo', this.imageData);

      this.http.post<any>(this.authURL, params, {headers: myheader}).subscribe(response => {
        this.loadingctrl.dismiss();
        if(response.token) {
          Swal.fire({
            title: 'Your account created successfully.',
            text: 'Please check your email inbox/SPAM folder and verify your account.',
            icon: 'success',
            heightAuto: false,
          }).then(() => {
            localStorage.setItem('token', response.token);
            this.nav.navigateRoot('tabs/tab2');
          });
        } else {
          alert(response.err);
        }
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please check your Password and confirm password.',
        icon: 'error',
        heightAuto: false,
      });
    }

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

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      saveToGallery: true,
      presentationStyle: 'popover',
    });
    this.imageData = image.base64String;
    this.mainPhoto = image.dataUrl;
  }

}
