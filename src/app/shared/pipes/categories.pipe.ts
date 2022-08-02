import { Pipe, PipeTransform } from '@angular/core';
import { CATEGORIES } from '../navbar.type';

@Pipe({
  name: 'categories',
})
export class CategoriesPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): any {
    switch (value) {
      case CATEGORIES.menSection: {
        return 'ازياء الرجال';
      }
      case CATEGORIES.womensSection: {
        return 'ازياء النساء';
      }
      case CATEGORIES.accessoriesSection: {
        return 'الاكسسوارات';
      }
      case CATEGORIES.mobilesSection: {
        return 'الموبيلات';
      }
      default: {
        return '-';
      }
    }
  }
}
