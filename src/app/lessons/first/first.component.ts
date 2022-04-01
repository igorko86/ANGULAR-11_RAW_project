import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  initial = 0;
  ref = '';
  flag = true;
  toggle = false;
  list = [1,2,3,4,5,6,7,8];
  currentColor = "";

  constructor() { }

  ngOnInit(): void {
    this.currentColor = 'green';
  }

  increment() {
   this.initial = this.initial + 1
  }
  decrement() {
   this.initial = this.initial - 1
  }

  consoleCounter(counter: number) {
    console.log(counter);
  }

  eventObject(event: any) {
    console.log(event);
  }

  showRef(refP: any, refDiv: any) {
    console.dir(refP)
    this.ref = 'Tag: ' + refP.tagName + ' Tag: ' + refDiv.tagName;
  }

  pressEnter(value: any) {
    this.ref = value;
  }

  changeStyles() {
    this.flag = !this.flag;
  }

  changeFlag() {
    this.toggle = !this.toggle;
  }
}
