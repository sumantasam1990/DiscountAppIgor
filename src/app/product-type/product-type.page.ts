import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.page.html',
  styleUrls: ['./product-type.page.scss'],
})
export class ProductTypePage implements OnInit {

  id: string
  name: string
  usersURL: string = environment.serverAPI + 'product/type/'
  loading: boolean
  data: any = []

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.name = this.route.snapshot.paramMap.get('name')
    await this.getData()

  }

  async getData() {
    this.loading = true
      await this.http.get(this.usersURL + this.id).subscribe((res: any) => {
        this.loading = false
        this.data = res.product_types
      }, error => {
        alert('Error! ' + error)
      })
  }

  product_screen(id: number, name: string) {
    this.router.navigate(['products', id, name]);
  }

}
