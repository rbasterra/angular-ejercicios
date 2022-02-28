import { Element } from './../../models/Element/element.models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvelFilter'
})
export class MarvelFilterPipe implements PipeTransform {

  transform(list: Element[], filter: string = '') {

    if (filter === ''){
      return list;
    } else{
      const lowerCaseFilter: string = filter.toLowerCase().trim();
      const filteredList: Element [] = list.filter((el:Element) => el.title?.toLowerCase().includes(lowerCaseFilter))
      return filteredList;
    }
  }

}
