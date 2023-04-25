import { Directive, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {

  private spiedTags = ['APP-HOME', 'APP-ABOUT', 'APP-WORK', 'APP-SKILLS', 'APP-CONTACT'];

  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection!: string;

  constructor(private elementReference: ElementRef) {}

  @HostListener('document:mousewheel', ['$event'])
  onScroll(event: any) {
    let currentSection = '';
    const childrens = this.elementReference.nativeElement.children;
    const top = event.target.scrollTop;
    const parentOffset = event.target.offsetTop;

    _.forEach(childrens, (children) => {
      if (_.some(this.spiedTags, (spiedTag) => spiedTag === children.tagName)) {
        if (children.offsetTop - parentOffset <= top) {
          currentSection = children.id;
        }
      }
    });
   
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}