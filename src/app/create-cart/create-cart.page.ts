import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from "@ionic/angular";

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.page.html',
  styleUrls: ['./create-cart.page.scss'],
})
export class CreateCartPage implements OnInit {

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
    // this.result = JSON.stringify(result, null, 2);
  }

}
