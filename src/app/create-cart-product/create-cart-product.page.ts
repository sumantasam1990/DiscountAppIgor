import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {environment} from '../../environments/environment';
import {LoadingController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-cart-product',
  templateUrl: './create-cart-product.page.html',
  styleUrls: ['./create-cart-product.page.scss'],
})
export class CreateCartProductPage implements OnInit {

  title = '';
  imp = '';
  price = '';
  buy = '';
  url = '';
  typeId = '';
  urlSaveCart: string = environment.serverAPI + 'cart/save/step3';

  constructor(
    private loading: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.typeId = this.route.snapshot.paramMap.get('id');
  }

  next() {
    const params = new URLSearchParams();
    params.set('title', this.title);
    params.set('imp', this.imp);
    params.set('price', this.price);
    params.set('buy', this.buy);
    params.set('url', this.url);
    params.set('cate', this.typeId);

    this.http.post<any>(this.urlSaveCart, params).subscribe(response => {
      // this.loadingctrl.dismiss();
      if(response.id) {
        Swal.fire({
          title: 'Success!',
          text: 'Product added successfully.',
          icon: 'success',
          heightAuto: false,
        }).then(() => {
          this.router.navigate(['create-cart-product-images', response.id]);
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

}
