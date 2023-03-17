import { Component } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-course';
  searchString = "";
  searchSubject$ = new Subject<string>();

  ngOnInit() {
    this.searchSubject$.pipe(
        debounceTime(2000)
      )
      .subscribe((x: any) => console.log('debounced: ', x));
  }

  inputChanged($event: any) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }

  ngOnDestroy() {
  }
}