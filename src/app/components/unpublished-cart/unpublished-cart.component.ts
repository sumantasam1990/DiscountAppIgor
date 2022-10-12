import { Component, OnInit } from '@angular/core';
import {delay, retry} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unpublished-cart',
  templateUrl: './unpublished-cart.component.html',
  styleUrls: ['./unpublished-cart.component.scss'],
})
export class UnpublishedCartComponent implements OnInit {

  unpublishedURL: string = environment.serverAPI + 'profile/unpublished/carts';
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

}
