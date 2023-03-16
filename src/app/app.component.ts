import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-course';
  observable$: any;

  ngOnInit() {
    this.observable$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
    this.observable$.subscribe(
      (value: any) => console.log(value),
      (err :any) => {},
      () => console.log('this is the end')
    );
  }

  ngOnDestroy() {
    this.observable$.unsubscribe();
  }
}
