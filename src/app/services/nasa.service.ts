import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Imgoftheday } from '../models/imgoftheday';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private APIkey = "YwL25YulGTjtFR6WznUPjXMYGQzZOMhQ5SQjTVwh";
  private url: string= "https://api.nasa.gov/planetary/apod?api_key=" + this.APIkey;
  private httpClient:HttpClient = inject(HttpClient);
  constructor() { }

  getImageOfTheDay(): Observable<Imgoftheday> {
    const obsUrl = this.httpClient.get<Imgoftheday>(this.url);
    console.log(obsUrl);
    return obsUrl;
  }
}
