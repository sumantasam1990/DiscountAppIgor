import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  usersURL: string = environment.serverAPI + 'users'

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {

  }

}
