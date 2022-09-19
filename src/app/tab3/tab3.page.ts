import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  // eslint-disable-next-line @typescript-eslint/naming-convention
  @ViewChild('searchbar') IonSearchbar: IonSearchbar;

  url = 'https://buyandsell.click/api/buyandsell/searchproduct/';
  keyword: any;
  products: any = [];

  constructor(
    private router: Router,
    private modalctrl: ModalController,
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.IonSearchbar.setFocus();
    }, 500);
  }

  async getSearchResults() {
    //
  }

  product(id) {
    this.modalctrl.dismiss();
    // this.router.navigate(['product', id])
  }

}
