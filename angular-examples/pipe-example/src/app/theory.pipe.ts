import { Inject, Pipe, PipeTransform } from '@angular/core';
import { TheoryService } from './theory.service';

@Pipe({
  name: 'theory',
})
export class TheoryPipe implements PipeTransform {
  constructor(private theory: TheoryService) {
    // this.theoryS = Inject(TheoryService);
  }
  transform(value: number, properties: 'title' | 'userId'): any {
    console.log(this.theory.getTheory(value));
    const result = this.theory.getTheory(value);
    if (result) {
      return result[properties];
    }
  }
}
