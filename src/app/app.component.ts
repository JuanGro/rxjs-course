import { Component } from '@angular/core';
import { interval, take, map, of, switchMap, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-course';

  ngOnInit() {
    fromEvent(document, 'click').subscribe(x => console.log(x));
  }

  ngOnDestroy() {
  }
}