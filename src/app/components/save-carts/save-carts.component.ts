import { Component, OnInit } from '@angular/core';
import {delay, retry} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-save-carts',
  templateUrl: './save-carts.component.html',
  styleUrls: ['./save-carts.component.scss'],
})
export class SaveCartsComponent implements OnInit {

  savedCartURL: string = environment.serverAPI + 'profile/listing/carts';
  loading = false;
  data: any = [];
  dataProducts: any = [];
  brandsData: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.getData();
    await this.getDataProducts();
    await this.getDataBrands();
  }

  async getData() {
    this.loading = true;
    await this.http.get(this.savedCartURL + '/0/1').pipe(delay(250), retry(3)).toPromise().then((res: any) => {
      this.loading = false;
      this.data = res.listings;
    }, error => {
      alert('Error! ' + error);
    });
  }

  async getDataProducts() {
    this.loading = true;
    await this.http.get(this.savedCartURL + '/0/2').pipe(delay(250), retry(3)).toPromise().then((res: any) => {
      this.loading = false;
      this.dataProducts = res.listings;
    }, error => {
      alert('Error! ' + error);
    });
  }

  async getDataBrands() {
    this.loading = true;
    await this.http.get(this.savedCartURL + '/0/3').pipe(delay(250), retry(3)).toPromise().then((res: any) => {
      this.loading = false;
      this.brandsData = res.listings;
    }, error => {
      alert('Error! ' + error);
    });
  }

  cartScreen(id, name){
    this.router.navigate(['product-type', id, name]);
  }

}
