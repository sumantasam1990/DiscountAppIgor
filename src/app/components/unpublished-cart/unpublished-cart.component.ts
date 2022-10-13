import { Component, OnInit } from '@angular/core';
import {delay, retry} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-unpublished-cart',
  templateUrl: './unpublished-cart.component.html',
  styleUrls: ['./unpublished-cart.component.scss'],
})
export class UnpublishedCartComponent implements OnInit {

  unpublishedURL: string = environment.serverAPI + 'profile/unpublished/carts';
  urlDeleteCart: string = environment.serverAPI + 'cart/delete/';
  urlPublishCart: string = environment.serverAPI + 'cart/publish/';

  loading = false;
  data: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.getData();
  }

  async getData() {
    this.loading = true;
    await this.http.get(this.unpublishedURL).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
      this.loading = false;
      this.data = res.carts;
    }, error => {
      alert('Error! ' + error);
    });
  }

  cartScreen(id, name){
    this.router.navigate(['product-type', id, name]);
  }

  go(id) {
    this.router.navigate(['create-cart-product-type', id]);
  }

  delete(id) {
    this.http.get(this.urlDeleteCart + id).subscribe((res: any) => {
      Swal.fire({
        title: 'Deleted',
        icon: 'success',
        heightAuto: false
      }).then(() => {
        this.getData();
      });
    });
  }

  publish(id) {
    this.http.get(this.urlPublishCart + id).subscribe((res: any) => {
      Swal.fire({
        title: 'Published',
        text: 'Cart has been successfully published.',
        icon: 'success',
        heightAuto: false,
      }).then(() => {
        this.getData();
      });
    });
  }

}
