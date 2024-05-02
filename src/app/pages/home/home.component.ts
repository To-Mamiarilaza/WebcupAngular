import { Component } from '@angular/core';
import { HomePictureComponent } from './home-picture/home-picture.component';
import { ServiceComponent } from './service/service.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { RecentProductComponent } from './recent-product/recent-product.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomePictureComponent, ServiceComponent, CategorieListComponent, RecentProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
