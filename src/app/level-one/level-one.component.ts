import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {delay, retry} from "rxjs/operators";

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.scss'],
})
export class LevelOneComponent implements OnInit {

  usersURL: string = environment.serverAPI + 'level/one/show/';
  cateId: string;
  cateName: string;
  data: any = [];
  loading = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.cateId = this.route.snapshot.paramMap.get('id');
    this.cateName = this.route.snapshot.paramMap.get('name');
    await this.getData();
  }

  async getData() {
    this.loading = true;
      await this.http.get(this.usersURL + this.cateId).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
        this.loading = false;
        this.data = res.level_ones;
      }, error => {
        alert('Error! ' + error);
      });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  level_two_screen(id: number, name: string) {
    this.router.navigate(['level-two', id, name]);
  }

}
