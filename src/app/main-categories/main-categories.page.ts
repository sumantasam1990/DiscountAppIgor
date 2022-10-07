import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ElementRef, ViewChild, ViewChildren, OnInit, QueryList} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.page.html',
  styleUrls: ['./main-categories.page.scss'],
})
export class MainCategoriesPage implements OnInit, AfterViewInit  {

  @ViewChildren('list') list: QueryList<ElementRef>;
  // @ViewChild('list1', { read: ElementRef, static: true }) list1: ElementRef;
  // @ViewChild('list2', { read: ElementRef, static: true }) list2: ElementRef;
  // @ViewChild('list3', { read: ElementRef, static: true }) list3: ElementRef;

  usersURL: string = environment.serverAPI + 'main/categories';
  loading: boolean;
  data: any = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private animationCtrl: AnimationController,
  ) {

  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    console.log(this.list.toArray());
    //this.animateButton();
  }

  // public animateButton() {
  //   const squareA = this.animationCtrl.create()
  //     .addElement(this.list1.nativeElement)
  //     .fill('none')
  //     .duration(1000)
  //     .keyframes([
  //       { offset: 0, transform: 'scale(1) rotate(0)' },
  //       { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
  //       { offset: 1, transform: 'scale(1) rotate(0)' }
  //     ]);
  //
  //   const squareB = this.animationCtrl.create()
  //     .addElement(this.list2.nativeElement)
  //     .fill('none')
  //     .duration(1000)
  //     .keyframes([
  //       { offset: 0, transform: 'scale(1)', opacity: '1' },
  //       { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
  //       { offset: 1, transform: 'scale(1)', opacity: '1' }
  //     ]);
  //
  //   const squareC = this.animationCtrl.create()
  //     .addElement(this.list3.nativeElement)
  //     .fill('none')
  //     .duration(1000)
  //     .keyframes([
  //       { offset: 0, transform: 'scale(1)', opacity: '0.5' },
  //       { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
  //       { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  //     ]);
  //
  //    squareA.play();
  //    squareB.play();
  //    squareC.play();
  // }

  async ngOnInit() {
    //this.animateButton();
    await this.getData();

  }

  async getData() {
    this.loading = true;
      await this.http.get(this.usersURL).subscribe((res: any) => {
        this.loading = false;
        this.data = res.categories;
      }, error => {
        alert('Error! ' + error);
      });
  }

  level_one_screen(id: number, name: string) {
    this.router.navigate(['level-one', id, name]);
  }

  createCart() {
    this.router.navigate(['create-cart']);
  }

}
