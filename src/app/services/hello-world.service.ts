import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor() { }

  getHelloWorld(): string {
    return "Hello world, c'est dans la caisse: :)";
  }
}
