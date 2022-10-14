import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType} from '@capacitor/camera';
import Swal from 'sweetalert2';
import {environment} from '../../environments/environment';
import {LoadingController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-cart-product-images',
  templateUrl: './create-cart-product-images.page.html',
  styleUrls: ['./create-cart-product-images.page.scss'],
})
export class CreateCartProductImagesPage implements OnInit {

  imageData = '';
  mainPhoto = '';
  urlCartSave: string = environment.serverAPI + 'cart/save/step4';
  urlGetPhotos: string = environment.serverAPI + 'get/product/images/';
  prodId = '';
  photos: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private loadingctrl: LoadingController,
  ) { }

  ngOnInit() {
    this.prodId = this.route.snapshot.paramMap.get('id');

    this.http.get(this.urlGetPhotos + this.prodId).subscribe((res: any) => {
      this.photos = res.data;
    });

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
    this.mainPhoto = image.webPath;
  }

  async presentLoading() {
    const loading = await this.loadingctrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait... Do not close or minimize or back the app',
      duration: 15000
    });
    await loading.present();
  }

  async upload() {
    await this.presentLoading();
    const params = new URLSearchParams();
    params.set('prod', this.prodId);
    params.set('photo', this.imageData);

    this.http.post<any>(this.urlCartSave, params).subscribe(response => {
      this.loadingctrl.dismiss();
      this.imageData = '';
      if(response.upload) {
        Swal.fire({
          title: 'Success!',
          icon: 'success',
          heightAuto: false,
        }).then(() => {
          this.http.get(this.urlGetPhotos + this.prodId).subscribe((res: any) => {
            this.photos = res.data;
          });
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: response.error,
          icon: 'error',
          heightAuto: false,
        });
      }
    });
  }

  finish() {
    this.router.navigate(['tabs/tab2']);
  }

}
