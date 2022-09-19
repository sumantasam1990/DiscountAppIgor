import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {delay, retry} from "rxjs/operators";

@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.page.html',
  styleUrls: ['./level-two.page.scss'],
})
export class LevelTwoPage implements OnInit {

  oneId: string
  oneName: string
  usersURL: string = environment.serverAPI + 'level/two/show/'
  loading: boolean
  data: any = []

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.oneId = this.route.snapshot.paramMap.get('id');
    this.oneName = this.route.snapshot.paramMap.get('name');
    await this.getData();

  }

  async getData() {
    this.loading = true;
      await this.http.get(this.usersURL + this.oneId).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
        this.loading = false;
        this.data = res.level_twos;
      }, error => {
        alert('Error! ' + error);
      });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  carts_screen(id: number, name: string) {
    this.router.navigate(['carts', id, name]);
  }

}
