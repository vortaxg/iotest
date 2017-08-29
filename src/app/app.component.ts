import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  onServerAdded(serverData: { name: String, content: String, type: String }): void {
    this.serverElements.push({
       name: serverData.name,
       content: serverData.content,
       type: serverData.type });
  }
  onBlueprintAdded(blueprintData: { name: String, content: String, type: String }): void {
    this.serverElements.push({
      name: blueprintData.name,
      content: blueprintData.content,
      type: blueprintData.type });
  }
}

