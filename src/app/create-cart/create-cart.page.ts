import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.page.html',
  styleUrls: ['./create-cart.page.scss'],
})
export class CreateCartPage implements OnInit {
  private imageElement: any;
  mainPhoto: string = '';

  constructor(
    private actionSheetCtrl: ActionSheetController,

  ) { }

  ngOnInit() {
  }

  async choosePhoto() {
    await this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Upload Photo',
      subHeader: 'Main cart photo',
      buttons: [
        {
          text: 'File',
          //role: 'destructive',
          data: {
            action: 'file',
          },
        },
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
      await this.takePhotoLibrary();
    } else if(result.data.action === 'camera') {
      await this.takePhoto();
    }
  }

  async takePhotoLibrary() {
      const image = await Camera.pickImages({
        quality: 60,
        presentationStyle: 'popover',
        limit: 1,
      });
      image.photos.map((res) => {
        console.log(res.path);
        this.mainPhoto = res.webPath;
      });
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      saveToGallery: true,
      presentationStyle: 'popover',
    });

    console.log(image.path);
    this.mainPhoto = image.webPath;
  }

  next() {
    Swal.fire({
      title: 'Success!',
      text: 'Now You can add product category/type and under the product type you can add multiple products.',
      icon: 'success',
      heightAuto: false,
    });
  }

}
