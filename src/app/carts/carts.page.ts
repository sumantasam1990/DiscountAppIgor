import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {delay, retry} from "rxjs/operators";

@Component({
  selector: 'app-carts',
  templateUrl: './carts.page.html',
  styleUrls: ['./carts.page.scss'],
})
export class CartsPage implements OnInit {

  twoId: string
  twoName: string
  usersURL: string = environment.serverAPI + 'carts/show/'
  loading: boolean
  data: any = []

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.twoId = this.route.snapshot.paramMap.get('id');
    this.twoName = this.route.snapshot.paramMap.get('name');
    await this.getData()

  }

  async getData() {
    this.loading = true;
      await this.http.get(this.usersURL + this.twoId).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
        this.loading = false;
        this.data = res.carts;
      }, error => {
        alert('Error! ' + error);
      });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  product_type_screen(id: number, name: string) {
    this.router.navigate(['product-type', id, name]);
  }

}
