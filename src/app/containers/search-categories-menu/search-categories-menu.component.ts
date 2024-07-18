import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Category, CategoryService, SharedModule } from '@shared/index';

@Component({
  selector: 'app-search-categories-menu',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './search-categories-menu.component.html',
  styleUrl: './search-categories-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchCategoriesMenuComponent {
  categories$ = this.categoryService.loadCategories();
  showCategorie = false;
  selectedCategorieChannel = new BroadcastChannel('selected-categorie');
  selectedCategoryName = 'beauty';
  constructor(private categoryService: CategoryService) {}

  displayCategories(value: boolean) {
    this.showCategorie = value;
  }
  selecteCategorie(category: string) {
    this.selectedCategoryName = category;
    this.selectedCategorieChannel.postMessage(category);
  }
}
