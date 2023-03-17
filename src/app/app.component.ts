import { Component } from '@angular/core';
import { interval, take, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-course';

  ngOnInit() {
    const numbers$ = interval(1000);
    const letters$ = of('a', 'b', 'c', 'd', 'e');

    letters$.pipe(
      switchMap(x =>
        numbers$.pipe(
          take(5),
          map(i => i + x)
        ))
    ).subscribe(x => console.log(x));
  }

  ngOnDestroy() {
  }
}