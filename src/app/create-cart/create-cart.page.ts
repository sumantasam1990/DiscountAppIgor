import { Component, OnInit } from '@angular/core';
import {ActionSheetController, LoadingController} from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.page.html',
  styleUrls: ['./create-cart.page.scss'],
})
export class CreateCartPage implements OnInit {

  url: string = environment.serverAPI + 'level/one/show/';
  urlTwo: string = environment.serverAPI + 'level/two/show/';
  urlCartSave: string = environment.serverAPI + 'cart/save/step1';
  mainPhoto = '';
  loading = false;
  maincategory = '';
  levelOneData = '';
  singleMulti = '';
  levelOne = [];
  levelTwo = [];
  levelTwoData = '';
  public cart = {cartName: '', cartDesc: ''};
  imageData = '';

  private imageElement: any;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private http: HttpClient,
    private loadingctrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingctrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait... Do not close or minimize or back the app',
      duration: 15000
    });
    await loading.present();
  }

  async getMainCate(e) {
    this.maincategory = e.detail.value;
    await this.getLevelOne();
  }

  async getSingleMulti(e) {
    this.singleMulti = e.detail.value;
  }

  async selectLevelOne(e) {
    this.levelOneData = e.detail.value;
    await this.getLevelTwo();
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  async level_two(e) {
    this.levelTwoData = e.detail.value;
  }

  async choosePhoto() {
    await this.presentActionSheet();
  }

  async getLevelOne() {
    this.loading = true;
    await this.http.get(this.url + this.maincategory).subscribe((res: any) => {
      this.loading = false;
      this.levelOne = res.level_ones;
    }, error => {
      // alert('Error! ' + error);
    });
  }

  async getLevelTwo() {
    this.loading = true;
    await this.http.get(this.urlTwo + this.levelOneData).subscribe((res: any) => {
      this.loading = false;
      this.levelTwo = res.level_twos;
    }, error => {
      // alert('Error! ' + error);
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Upload Photo',
      subHeader: 'Main cart photo',
      buttons: [
        // {
        //   text: 'File',
        //   //role: 'destructive',
        //   data: {
        //     action: 'file',
        //   },
        // },
        {
          text: 'Camera',
          data: {
            action: 'camera',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    if(result.data.action === 'file') {
      // await this.takePhotoLibrary();
    } else if(result.data.action === 'camera') {
      await this.takePhoto();
    }
  }

  // async takePhotoLibrary() {
  //     const image = await Camera.pickImages({
  //       quality: 60,
  //       presentationStyle: 'popover',
  //       limit: 1,
  //     });
  //     image.photos.map((res) => {
  //       this.imageData = res.webPath;
  //       this.mainPhoto = res.webPath;
  //     });
  // }

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


  async processData() {
    await this.presentLoading();
    const params = new URLSearchParams();
    params.set('cart', this.cart.cartName);
    params.set('desc', this.cart.cartDesc);
    params.set('two', this.levelTwoData);
    params.set('main_cate', this.maincategory);
    params.set('photo', this.imageData);
    params.set('single_multi', this.singleMulti);

    this.http.post<any>(this.urlCartSave, params).subscribe(response => {
      this.loadingctrl.dismiss();
      if(response.id) {
        Swal.fire({
          title: 'Success!',
          text: 'Now You can add product category/type and under the product type you can add multiple products.',
          icon: 'success',
          heightAuto: false,
        }).then(() => {
          this.router.navigate(['create-cart-product-type', response.id]);
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

  next() {
    this.processData();
  }

}
