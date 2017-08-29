import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input("el") serverElement = { name: String, content: String, type: String };
  constructor() { }
  ngOnInit() {
  }
}
