import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  title = 'Jokes';
  jokes: any;

  constructor ( updates: SwUpdate, private dataService: DataService) {
    updates.available.subscribe( event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.dataService.givemeJokes().subscribe(res => {
      this.jokes = res;
    });
  }
}
