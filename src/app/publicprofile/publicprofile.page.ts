import {Component, Input, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';
import {delay, retry} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-publicprofile',
  templateUrl: './publicprofile.page.html',
  styleUrls: ['./publicprofile.page.scss'],
})
export class PublicprofilePage implements OnInit {

  urlProfile: string = environment.serverAPI + 'profile/';
  publishedURL: string = environment.serverAPI + 'profile/published/carts/';
  unpublished = false;
  published = true;
  saved = false;
  follow = false;
  list = false;

  loading = false;
  data: any = [];
  userIdd = '';
  profileData: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.userIdd = this.route.snapshot.paramMap.get('id');
    await this.getData();
    this.http.get(this.urlProfile +this.userIdd).subscribe((res: any) => {
      this.profileData = res.profile[0];
    });
  }

  async getData() {
    this.loading = true;
    await this.http.get(this.publishedURL + this.userIdd).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
      this.loading = false;
      this.data = res.carts;
    }, error => {
      alert('Error! ' + error);
    });
  }

  segmentChanged(ev: any) {
    if(ev.detail.value === 'unpub') {
      this.unpublished = true;
      this.published = false;
      this.saved = false;
      this.follow = false;
      this.list = false;
    }
    if(ev.detail.value === 'pub') {
      this.published = true;
      this.unpublished = false;
      this.saved = false;
      this.follow = false;
      this.list = false;
    }
    if(ev.detail.value === 'saved') {
      this.saved = true;
      this.published = false;
      this.unpublished = false;
      this.follow = false;
      this.list = false;
    }
    if(ev.detail.value === 'follow') {
      this.follow = true;
      this.published = false;
      this.saved = false;
      this.unpublished = false;
      this.list = false;
    }
    if(ev.detail.value === 'list') {
      this.list = true;
      this.published = false;
      this.saved = false;
      this.follow = false;
      this.unpublished = false;
    }
  }

  cartScreen(id, name){
    this.router.navigate(['product-type', id, name]);
  }

  createCart(){
    this.router.navigate(['create-cart']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
