import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-course';

  ngOnInit() {
    const numbers$ = interval(1000).pipe(take(5));

    numbers$.subscribe((x: any) => console.log(x));
  }

  ngOnDestroy() {
  }
}