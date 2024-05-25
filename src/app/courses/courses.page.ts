import { Component, HostListener, OnInit, ViewEncapsulation,ElementRef, ViewChild, EventEmitter, Input, Output  } from '@angular/core';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { NavController } from '@ionic/angular';
import { IonContent, IonRow, IonGrid, IonCol, IonIcon } from "@ionic/angular/standalone";
import {Observable, Observer} from 'rxjs';




@Component({
    selector: 'app-courses',
    templateUrl: './courses.page.html',
    styleUrls: ['./courses.page.scss'],
    encapsulation: ViewEncapsulation.None,

})
export class CoursesPage implements OnInit {
  [x: string]: any;
isAlertOpen = false;
alertButtons = ['OK'];
isDisabled: any;
setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen ;
}

  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  halfContent: string;
  showFullContent = false;
  constructor(private elRef: ElementRef,private navCtrl: NavController) {
    // Calculate the length of half content
    const halfLength = Math.ceil(this.content.length / 2);
    // Extract the first half of the content
    this.halfContent = this.content.substr(0, halfLength);
  }


  ngOnInit(): void {
    this.setDynamicHeight();
    // Listen for window resize event to update height dynamically

  }

  setDynamicHeight(): void {
    const tabHeaderHeight = 48; // Height of the tab header
    const viewportHeight = window.innerHeight; // Viewport height
    const dynamicHeight = viewportHeight - tabHeaderHeight;
    // Set the dynamic height to the element
    this.elRef.nativeElement.querySelector('.tab-content').style.height = `${dynamicHeight}px`;
  }

  goBack(){
    this.navCtrl.back();
  }

}
