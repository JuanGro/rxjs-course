import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-course';
  searchString = "";
  searchSubject$ = new Subject<string>();
  results$!: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.results$ = this.searchSubject$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(x => console.log('do', x)),
        switchMap(searchString => this.queryAPI(searchString))
      )
  }

  queryAPI(searchString: string) {
    console.log('queryAPI', searchString);
    return this.http.get(`http://www.reddit.com/r/aww/search.json?q=${searchString}`)
      .pipe(
        map((result: any) => result['data']['children'])
      );
  }

  inputChanged($event: any) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }

  ngOnDestroy() {
  }
}