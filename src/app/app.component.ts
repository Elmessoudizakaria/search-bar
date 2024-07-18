import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchCategoriesMenuComponent, SearchComponent } from '@containers/index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent,SearchCategoriesMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'search-bar';
}
