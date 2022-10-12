import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Swal from 'sweetalert2';
import {LoadingController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from "../../environments/environment";
import {alert} from "ionicons/icons";

@Component({
  selector: 'app-create-cart-product-type',
  templateUrl: './create-cart-product-type.page.html',
  styleUrls: ['./create-cart-product-type.page.scss'],
})
export class CreateCartProductTypePage implements OnInit {

  prodType = '';
  cartId = '';
  urlCartSave: string = environment.serverAPI + 'cart/save/step2';
  urlGetTypes: string = environment.serverAPI + 'get/product/types/';
  urlGetTypesDelete: string = environment.serverAPI + 'get/product/types/delete/';
  types: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private loadingctrl: LoadingController,
  ) { }

  ngOnInit() {
    this.cartId = this.route.snapshot.paramMap.get('id');
    this.http.get(this.urlGetTypes + this.cartId).subscribe((res: any) => {
      this.types = res.data;
    });
  }

  addType() {
    const params = new URLSearchParams();
    params.set('cartId', this.cartId);
    params.set('cate', this.prodType);

    this.http.post<any>(this.urlCartSave, params).subscribe(response => {
      // this.loadingctrl.dismiss();
      if(response.id) {
        this.prodType = '';
        //get data
        this.http.get(this.urlGetTypes + this.cartId).subscribe((res: any) => {
          this.types = res.data;
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

  delete(id) {
    this.http.get(this.urlGetTypesDelete + id).subscribe((res: any) => {
      this.http.get(this.urlGetTypes + this.cartId).subscribe((resp: any) => {
        this.types = resp.data;
      });
    });
  }

  product(id) {
    this.router.navigate(['create-cart-product', id]);
  }



}
