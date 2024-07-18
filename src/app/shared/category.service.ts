import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private http: HttpClient) {}

  loadCategories() {
    return this.http.get<string[]>(
      'https://dummyjson.com/products/category-list'
    );
  }
}
