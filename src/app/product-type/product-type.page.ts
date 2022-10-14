import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {delay, retry} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.page.html',
  styleUrls: ['./product-type.page.scss'],
})
export class ProductTypePage implements OnInit {

  id: string;
  name: string;
  usersURL: string = environment.serverAPI + 'product/type/';
  urlCartSave: string = environment.serverAPI + 'save/cart/store';
  urlFollowUser: string = environment.serverAPI + 'follow/user/store';
  loading: boolean;
  data: any = [];
  following = false;
  savedCart = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private loadingctrl: LoadingController,
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    await this.getData();

  }

  async presentLoading() {
    const loading = await this.loadingctrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait... Do not close or minimize or back the app',
      duration: 15000
    });
    await loading.present();
  }

  async getData() {
     this.loading = true;
      await this.http.get(this.usersURL + this.id).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
        console.log(res);
        this.loading = false;
        this.data = res.cart[0];
        if(res.save_cart > 0) {
          this.savedCart = true;
        }
        if(res.followed > 0) {
          this.following = true;
        }
      }, error => {
        alert('Error! ' + error);
      });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  product_screen(id: number, name: string) {
    this.router.navigate(['products', id, name]);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  save_cart() {
    const params = new URLSearchParams();
    params.set('cart', this.id);

    this.http.post<any>(this.urlCartSave, params).subscribe(response => {
      // this.loadingctrl.dismiss();
      if(response.id) {
        this.savedCart = true;
        Swal.fire({
          title: 'Success!',
          text: 'Cart saved into your account.',
          icon: 'success',
          heightAuto: false
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

  follow(id) {
    const params = new URLSearchParams();
    params.set('userId', id);

    this.http.post<any>(this.urlFollowUser, params).subscribe(response => {
      // this.loadingctrl.dismiss();
      if(response.id) {
        this.following = true;
        Swal.fire({
          title: 'Success!',
          text: 'Following',
          icon: 'success',
          heightAuto: false
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

  gotoProfile(id) {
    this.router.navigate(['publicprofile', id]);
  }

}
