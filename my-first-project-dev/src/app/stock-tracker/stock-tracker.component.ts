import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.css'],
})
export class StockTrackerComponent {
  // countries: any;

  searchForm = this.fb.group({
    searchField: [''],
  });

  countries$: any;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    //  Stream 1
    this.countries$ = this.searchForm.get('searchField')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((val) =>
        timer(0, 10000).pipe(
          switchMap((n) => this.search(val as string)), // API call
          catchError((err) => {
            console.log(err);
            return [];
          })
        )
      )
    );
  }

  search(region: string) {
    // Stream 2
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`);
  }
}
