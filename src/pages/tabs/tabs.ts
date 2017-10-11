import { Component } from '@angular/core';

import { StudentsPage } from '../students/students';
import { ProfilePage } from '../profile/profile';
import { QrcodePage } from '../qrcode/qrcode';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = QrcodePage;
  tab2Root = StudentsPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
