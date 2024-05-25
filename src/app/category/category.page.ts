import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

navigateToCoursesPage() {
  this.navCtrl.navigateForward('/courses');
}
  headerHeight: string = '300px'; // Initial height of the header image
  imageOpacity: number = 1; // Initial opacity of the header image
  headerOpacity: number = 3 ;
  constructor(private navCtrl: NavController,) {
    this.filteredItems = this.items.slice();

    // Extract categories from items
    this.categories = this.items.map(item => item.category);
    // Remove duplicates
    this.categories = this.categories.filter((value, index, self) => self.indexOf(value) === index);


  }
  onScroll(event) {
    const scrollPosition = event.detail.scrollTop;

    // Adjust image size based on scroll position
    this.headerHeight = Math.max(300 - scrollPosition, 100) + 'px';

    // Adjust image opacity based on scroll position
    this.imageOpacity = Math.min((300 - scrollPosition) / 300, 1);
    this.headerOpacity = 1;
  }

  goBack() {
    this.navCtrl.navigateForward('');
  }

  ngOnInit() {
  }

  showFilter: boolean = false;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  items: any[] = [
    { name: 'Item 1', category: 'Category A', rating: 4, price: 20, duration: 30 },
    { name: 'Item 2', category: 'Category B', rating: 5, price: 25, duration: 45 },
    { name: 'Item 3', category: 'Category A', rating: 3, price: 15, duration: 60 },
    // Add more items as needed
  ];

  // Extract categories from items
  categories: string[] = [];

  // Filter options
  selectedCategory: string = '';
  selectedRating: number | null = null;
  selectedPrice: number | null = null;
  selectedDuration: number | null = null;

  // Filtered items
  filteredItems: any[] = [];



  applyFilter() {
    // Apply filter based on selected options
    this.filteredItems = this.items.filter(item => {
      let passCategory = true;
      let passRating = true;
      let passPrice = true;
      let passDuration = true;

      if (this.selectedCategory) {
        passCategory = item.category === this.selectedCategory;
      }
      if (this.selectedRating !== null) {
        passRating = item.rating === this.selectedRating;
      }
      if (this.selectedPrice !== null) {
        passPrice = item.price === this.selectedPrice;
      }
      if (this.selectedDuration !== null) {
        passDuration = item.duration === this.selectedDuration;
      }

      return passCategory && passRating && passPrice && passDuration;
    });
  }
}
