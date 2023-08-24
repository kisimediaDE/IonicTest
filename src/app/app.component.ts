import { AdMobPlus, BannerAd } from '@admob-plus/capacitor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    (async () => {
      const banner = new BannerAd({
        adUnitId: 'ca-app-pub-3940256099942544/6300978111',
      });
      await banner.show();

      AdMobPlus.addListener('banner.impression', async () => {
        await banner.hide();
      });
    })();
  }
}
