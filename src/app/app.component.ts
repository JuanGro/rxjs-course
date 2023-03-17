import { Component } from '@angular/core';
import { interval, take, map, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-course';

  ngOnInit() {
    const numbers$ = interval(1000);

    numbers$
      .pipe(
        take(5),
        map(x => x * 2),
        filter(x => x < 3)
      )
      .subscribe((x: any) => console.log(x));
  }

  ngOnDestroy() {
  }
}