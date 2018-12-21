import { Component, OnInit } from '@angular/core';
import { TestServiceProxy, ValuesServiceProxy } from '../shared/service-proxies/service-proxies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  values: string[] = [];
  constructor(private tsp: TestServiceProxy, private vsp: ValuesServiceProxy) {

  }

  ngOnInit(): void {
    this.vsp.list().subscribe(r => this.values = r);
    this.tsp.test().subscribe(() => {});
  }

}
