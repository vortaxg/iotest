import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {
  @Output() serverCreation = new EventEmitter<{ name: String, content: String, type: String }>();
  @Output() blueprintCreation = new EventEmitter<{ name: String, content: String, type: String }>();
  name: String = '';
  content: String = '';
  constructor() { }
  ngOnInit() {
  }
  onAddServer(): void {
    this.serverCreation.emit({
       name: this.name,
       content: this.content,
       type: 'server' });
  }
  onAddBlueprint(): void {
    this.blueprintCreation.emit({
      name: this.name,
      content: this.content,
      type: 'blueprint' });
  }
}
