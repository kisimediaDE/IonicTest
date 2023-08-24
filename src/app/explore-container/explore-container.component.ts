import { Component, Input } from '@angular/core';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  info?: any;

  constructor() {
    App.getInfo().then((info) => {
      this.info = info;
    });
  }

}
