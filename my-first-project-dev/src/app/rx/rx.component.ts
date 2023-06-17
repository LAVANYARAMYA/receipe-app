import { Component } from '@angular/core';
import {
  catchError,
  debounce,
  debounceTime,
  distinctUntilChanged,
  filter,
  interval,
  map,
  switchMap,
  take,
  timer,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css'],
})
export class RxComponent {
  countries: any;

  searchForm = this.fb.group({
    searchField: [''],
  });

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    //  Stream 1
    this.searchForm
      .get('searchField')
      ?.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((val) => this.search(val as string)),
        catchError((err) => {
          console.log(err);
          return [];
        })
      )
      .subscribe((value: any) => {
        this.countries = value;
      });
  }

  search(region: string) {
    // Stream 2
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`);
  }
}
