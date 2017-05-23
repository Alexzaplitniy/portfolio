import { Pipe, PipeTransform } from '@angular/core';
import { DeveloperInterface } from '../models/developer/developer.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: DeveloperInterface[], query?: string): DeveloperInterface[] {
    let result: DeveloperInterface[] = [];

    const q:string = query.toLowerCase();

    if (query.length) {
      result = value.filter((item: DeveloperInterface) => {
        return item.name.toLowerCase().includes(q) ||
          item.position.toLowerCase().includes(q) ||
          Boolean(item.tags.filter((tag: string) => tag.toLowerCase().includes(q)).length)
      });
    } else {
      result = value;
    }

    return result;
  }

}
