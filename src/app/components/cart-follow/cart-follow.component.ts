import { Component, OnInit } from '@angular/core';
import {delay, retry} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-follow',
  templateUrl: './cart-follow.component.html',
  styleUrls: ['./cart-follow.component.scss'],
})
export class CartFollowComponent implements OnInit {

  followCartURL: string = environment.serverAPI + 'profile/follow/carts';
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
    await this.http.get(this.followCartURL).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
      this.loading = false;
      this.data = res.follow_carts;
      console.log(res.follow_carts[0].followings[0].name);
    }, error => {
      alert('Error! ' + error);
    });
  }

  cartScreen(id, name){
    this.router.navigate(['product-type', id, name]);
  }

}
