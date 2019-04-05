import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  Renderer2,
  ChangeDetectionStrategy
} from '@angular/core';
import {CarouselItemDirective} from "../../directives/carousel-item.directive";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements AfterContentInit {
  public queryLisCarousel: any;
  public lengthCard: number;
  public count: number = 0;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  @ContentChildren(CarouselItemDirective) detail: QueryList<CarouselItemDirective>;

  ngAfterContentInit() {
    this.lengthCard = this.detail.length;
    this.queryLisCarousel = this.detail.toArray();
    const a = this.queryLisCarousel[this.count].view.element.nativeElement.nextElementSibling;
    this.renderer.setAttribute(a, 'class', 'credit active');
  }
  next(): void {
    if(this.count < this.lengthCard - 1) {
      this.count++;
      this.getClass(this.queryLisCarousel[this.count].view.element.nativeElement.nextElementSibling, this.elemRef.nativeElement.querySelectorAll('.navigation-a')[this.count]);
      const i = this.queryLisCarousel[this.count - 1].view.element.nativeElement.nextElementSibling;
      this.renderer.removeClass(i, 'active');
      this.renderer.addClass(i, 'no-active');
      const b = this.elemRef.nativeElement.querySelectorAll('.navigation-a')[this.count - 1];
      this.renderer.removeClass(b, 'active-a');
      this.renderer.addClass(b, 'no-active-a');
    } else if(this.count === this.lengthCard - 1) {
      this.count = 0;
      const i = this.queryLisCarousel[this.lengthCard - 1].view.element.nativeElement.nextElementSibling;
      this.renderer.removeClass(i, 'active');
      this.renderer.addClass(i, 'no-active');
      const b = this.queryLisCarousel[0].view.element.nativeElement.nextElementSibling;
      this.renderer.removeClass(b, 'no-active');
      this.renderer.addClass(b, 'active');
      const c = this.elemRef.nativeElement.querySelectorAll('.navigation-a');
      this.renderer.removeClass(c[this.lengthCard - 1], 'active-a');
      this.renderer.addClass(c[this.lengthCard -1], 'no-active-a');
      this.renderer.removeClass(c[this.count], 'no-active-a');
      this.renderer.addClass(c[this.count], 'active-a');
    }
  }
  prev(): void {
    if(this.count >= 1) {
      this.count--;
      this.getClass(this.queryLisCarousel[this.count].view.element.nativeElement.nextElementSibling, this.elemRef.nativeElement.querySelectorAll('.navigation-a')[this.count]);
      const i = this.queryLisCarousel[this.count + 1].view.element.nativeElement.nextElementSibling;
      this.renderer.removeClass(i, 'active');
      this.renderer.addClass(i, 'no-active');
      const b = this.elemRef.nativeElement.querySelectorAll('.navigation-a')[this.count + 1];
      this.renderer.removeClass(b, 'active-a');
      this.renderer.addClass(b, 'no-active-a');
    } else if(this.count === 0) {
      this.count = this.lengthCard - 1;
      const i = this.queryLisCarousel[0].view.element.nativeElement.nextElementSibling;
      this.renderer.removeClass(i, 'active');
      this.renderer.addClass(i, 'no-active');
      const b = this.queryLisCarousel[this.lengthCard - 1].view.element.nativeElement.nextElementSibling;
      this.renderer.removeClass(b, 'no-active');
      this.renderer.addClass(b, 'active');
      const d = this.elemRef.nativeElement.querySelectorAll('.navigation-a');
      this.renderer.removeClass(d[0], 'active-a');
      this.renderer.addClass(d[0], 'no-active-a');
      this.renderer.addClass(d[this.count], 'active-a');
      this.renderer.removeClass(d[this.count], 'no-active-a');
    }
  }

  getClass(i: CarouselItemDirective, b: ElementRef): void {
    this.renderer.removeClass(i, 'no-active');
    this.renderer.addClass(i, 'active');
    this.renderer.removeClass(b, 'no-active-a');
    this.renderer.addClass(b, 'active-a');
  }

  swapCard(i): void {
    const b = this.queryLisCarousel[i].view.element.nativeElement.nextElementSibling;
    const c = this.queryLisCarousel[this.count].view.element.nativeElement.nextElementSibling;
    if(i !== this.count) {
      this.renderer.removeClass(c, 'active');
      this.renderer.addClass(c, 'no-active');
      this.renderer.addClass(b, 'active');
      this.renderer.removeClass(b, 'no-active');
      const a = this.elemRef.nativeElement.querySelectorAll('.navigation-a')[i];
      this.renderer.addClass(a, 'active-a');
      this.renderer.removeClass(a, 'no-active-a');
      const d = this.elemRef.nativeElement.querySelectorAll('.navigation-a')[this.count];
      this.renderer.addClass(d, 'no-active-a');
      this.renderer.removeClass(d, 'active-a');
    }
    this.count = i;
  }
}
