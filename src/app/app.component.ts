import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  name = '';
  content = '';

  addServer(): void {
    this.serverElements.push({ name: this.name, content: this.content, type: 'server' });
  }
  addBlueprint(): void {
    this.serverElements.push({ name: this.name, content: this.content, type: 'blueprint' });
  }
}

