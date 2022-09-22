import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.page.html',
  styleUrls: ['./main-categories.page.scss'],
})
export class MainCategoriesPage implements OnInit {

  usersURL: string = environment.serverAPI + 'main/categories';
  loading: boolean
  data: any = []

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.getData()

  }

  async getData() {
    this.loading = true
      await this.http.get(this.usersURL).subscribe((res: any) => {
        this.loading = false
        this.data = res.categories
      }, error => {
        alert('Error! ' + error)
      })
  }

  level_one_screen(id: number, name: string) {
    this.router.navigate(['level-one', id, name])
  }

}
