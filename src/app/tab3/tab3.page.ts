import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar, ModalController } from '@ionic/angular';
import {environment} from '../../environments/environment';
import {delay, retry} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  // eslint-disable-next-line @typescript-eslint/naming-convention
  @ViewChild('searchbar') IonSearchbar: IonSearchbar;

  searchURL: string = environment.serverAPI + 'search';
  keyword: any;
  results: any = [];
  loading = false;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.IonSearchbar.setFocus();
    }, 500);
  }

  async getSearchResults() {
    this.loading = true;
    if(this.keyword.length > 3) {
      await this.http.get(this.searchURL + '/' + this.keyword).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
        this.loading = false;
        this.results = res.results;
      }, error => {
        alert('Error! ' + error);
      });
    } else {
      this.loading = false;
      this.results = [];
    }
  }

  cartScreen(id, name){
    this.router.navigate(['product-type', id, name]);
  }

}

// end file 4
