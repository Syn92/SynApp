import { Component, OnInit } from '@angular/core';
import { Constants } from './../Constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public appName: string = Constants.appName;
  public about: string = Constants.about;
  public contact: string = Constants.contact;
  public product: string = Constants.product;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  public navigateToAppName() {
    this.router.navigateByUrl('');
  }
  public navigateToProduct() {
    this.router.navigateByUrl(Constants.PRODUCT_PATH);
  }
  public navigateToAbout() {
    this.router.navigateByUrl(Constants.ABOUT_PATH);
  }
  public navigateToContact() {
    this.router.navigateByUrl(Constants.CONTACT_PATH);
  }

}
