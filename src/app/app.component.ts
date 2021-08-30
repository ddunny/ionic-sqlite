import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Drivers } from '@ionic/storage';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public test = 'test_login';
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private storage: Storage
    ) {
      this.init();
    }

    async init() {
      console.log('init');
      await this.storage.defineDriver(CordovaSQLiteDriver);
      await this.storage.create();
    }

    getValue() {
      this.storage.get(this.test).then(value => console.log('get result: ', value));
    }

    setValue() {
      return this.storage.set(this.test, 'hyesun3');
    }

    clearValue() {
      return this.storage.clear();
    }
}
