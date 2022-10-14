import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  constructor(
    private router: Router,
  ) {
    StatusBar.setStyle({ style: Style.Light });

    if(localStorage.getItem('token')) {
      router.navigate(['']);
    } else {
      router.navigate(['login']);
    }
  }


}

// the end end.......
