import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CategoryService } from './category.service';
import { AsyncPipe } from '@angular/common';

@NgModule({
  imports: [AsyncPipe],
  exports: [AsyncPipe],
  declarations: [],
  providers: [provideHttpClient(), CategoryService],
})
export class SharedModule {}
