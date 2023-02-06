import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <p>Login</p>
    <input>
    <button onclick="click">Submit</button>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  name = 'hello';
  constructor() { }
  click(){
    this.name = 'clicked';
  }
  ngOnInit(): void {
  }

}
