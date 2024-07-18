import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.interface';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private http: HttpClient) {}

  loadCategories() {
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
  }
}
