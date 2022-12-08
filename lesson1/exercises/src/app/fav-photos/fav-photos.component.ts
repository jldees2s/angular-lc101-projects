import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://blog.spcollege.edu/careers-internships/wp-content/uploads/sites/22/2019/05/launchcode-logo-facebook1-e397a364ce733d0dee2bca438c6c1cf45d4ba9200a28c7b0b0da0e436f0ae44f.jpg';
  image2 = 'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg';
  image3 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';

  constructor() { }

  ngOnInit() {
  }

}