import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  name: String = '';
  content: String = '';

  onServerAdd(): void {
    this.serverElements.push({ name: this.name, content: this.content, type: 'server' });
  }
  onBlueprintAdd(): void {
    this.serverElements.push({ name: this.name, content: this.content, type: 'blueprint' });
  }
}

