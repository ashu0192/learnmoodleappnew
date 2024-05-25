import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    swiperSlideChanged($event: any) {
    const currentIndex = $event.realIndex;
    console.log('Slide changed. Current Index:', currentIndex);
  }

  constructor(private router: Router, private navCtrl: NavController) { }
  navigateToLogin() {
  this.router.navigateByUrl('/login');
  }

  navigateToCourses() {
    // Navigate to the Moodle courses page
      // Adjust the path according to your app's routing configuration
      this.router.navigateByUrl('/main/home/courses/list?mode=all');
    }

    navigateToAnotherPage() {
      this.router.navigate(['/category']);
    }


  ngOnInit() {
  }

  items = [1,2,3,4]

}
